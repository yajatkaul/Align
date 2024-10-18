import Cart from "../models/cart.model.js";
import UserCart from "../models/userCart.model.js";
import User from "../models/user.model.js";
import mongoose from "mongoose";
import Order from "../models/order.model.js";
import twilio from "twilio";

export const sendCard = async (req, res) => {
  try {
    const details = req.body;
    const userId = req.session.userId;
    // Validate required fields
    if (!details.name) {
      return res.status(400).json({ error: "Fill all the details" });
    }

    // Fetch user details
    const temp = await User.findById(userId);

    if (!temp) {
      return res.status(404).json({ error: "User not found" });
    }

    // Create a new Cart object
    const newCart = new Cart({
      color: details.color,
      glass: details.glass,
      pic: details.pic,
      name: details.name,
      type: details.type,
      width: details.width,
      height: details.height,
      remarks: details.remarks,
    });

    // Find UserCart by user ID
    let userCart = await UserCart.findOne({ user: userId });

    if (!userCart) {
      userCart = new UserCart({
        user: userId,
        items: [],
      });
    }

    // Check if the newCart ID is already in userCart items
    if (!userCart.items.includes(newCart._id)) {
      userCart.items.push(newCart._id);
    }

    await newCart.save();
    await userCart.save();

    res.status(200).json("Order Placed");
  } catch (err) {
    console.error("Error in sendCard:", err);
    // Handle specific MongoDB duplicate key error
    if (err.code === 11000) {
      return res
        .status(400)
        .json({ error: "Duplicate key error. Order already exists." });
    }
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
};

export const getCart = async (req, res) => {
  try {
    const userId = req.session.userId;

    // Await the findOne operation to get the user's cart
    const cart = await UserCart.findOne({ user: userId }).populate("items");

    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    res.status(200).json(cart);
  } catch (err) {
    console.error("Error in getCart:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteCart = async (req, res) => {
  try {
    const userId = req.session.userId;
    const itemToRemove = new mongoose.Types.ObjectId(req.body.id); // Convert string to ObjectId

    const cart = await UserCart.findOne({ user: userId });

    if (!cart) {
      return res.status(400).json({ err: "Cart not found" });
    }

    // Filter out the itemToRemove correctly
    cart.items = cart.items.filter(
      (item) => item.toString() !== itemToRemove.toString()
    );

    await cart.save();

    res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    console.error("Error in deleteCart:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const order = async (req, res) => {
  try {
    const userId = req.session.userId;
    const types = [];

    // Retrieve customer and cart details
    const customer = await User.findById(userId);
    const cartToAdd = await UserCart.findOne({ user: userId }).populate(
      "items"
    );
    // Create and save the new order
    const newOrder = new Order({
      user: userId,
      items: cartToAdd.toObject(),
      location: customer.location,
      email: customer.email,
      type: customer.type,
      phoneNumber: customer.phoneNumber,
    });
    await newOrder.save();

    // Clear the cart
    await UserCart.updateOne({ user: userId }, { $set: { items: [] } });

    // Iterate over each item in the order
    for (const item of cartToAdd.items) {
      if (!types.includes(item.type)) {
        types.push(item.type);
      }
      // Prepare the JSON payload for each item
      const jsonPayload = {
        fields: {
          Title: newOrder._id,
          field_1: customer.location,
          field_2: customer.phoneNumber.toString(),
          email: customer.email,
          field_4: customer.type,
          field_5: newOrder.createdAt,
          field_7: item.color || "NA",
          field_8: item.pic || "NA",
          field_9: item.glass || "NA",
          field_10: item.name || "NA",
          field_11: item.width || 0,
          field_12: item.height || 0,
          field_13: item.remarks || "NA",
        },
      };

      const formData = new FormData();
      formData.append("grant_type", "client_credentials");
      formData.append("client_id", process.env.client_id);
      formData.append("client_secret", process.env.client_secret);
      formData.append("scope", process.env.scope);

      const authToken = await fetch(
        "https://login.microsoftonline.com/34e90b5b-f022-45c2-b436-d1afb8bf1344/oauth2/v2.0/token",
        {
          method: "POST",
          body: formData,
        }
      );

      const token = await authToken.json();
      fetch(
        "https://graph.microsoft.com/v1.0/sites/2f1cd2ad-69b8-4ede-b326-cdd9838b04eb,dac56c1a-fd7b-4d8e-a943-9d22add20e39/lists/984554f0-f782-4bf8-9b89-8fbc5b25c917/items/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.access_token}`,
          },
          body: JSON.stringify(jsonPayload),
        }
      );
    }
    sendWhatsApp(customer.phoneNumber, types);
    res.status(200).json({ result: "Order Successful" });
  } catch (error) {
    console.error("Error processing order:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllOrders = async (req, res) => {
  const { page, limit } = req.query;
  if (!req.session.userId) {
    return res.status(400).json({ err: "You are not logged in" });
  }
  const customer = await User.findById(req.session.userId);

  if (customer.email !== "yajat.kaul@gmail.com") {
    return res.status(400).json({ err: "Unauthorized" });
  }

  const orders = await Order.find()
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(parseInt(limit));

  res.status(200).json(orders);
};

const sendWhatsApp = (number, types) => {
  const accountSid = process.env.accountSid;
  const authToken = process.env.authToken;
  const client = new twilio(accountSid, authToken);

  client.messages
    .create({
      contentSid: "HX375505cc866a9ce00a980475fc347c02",
      contentVariables: JSON.stringify({
        1: "Thank you for joining us today!",
      }),
      from: "whatsapp:+14843460368",
      to: `whatsapp:+91${number}`,
    })
    .catch((err) => console.error(err));

  if (types.includes("Sliding Door")) {
    client.messages
      .create({
        contentSid: "HXd110b042223fef6295236b1b136db31c",
        from: "whatsapp:+14843460368",
        to: `whatsapp:+91${number}`,
      })
      .catch((err) => console.error(err));
  }

};
