import Cart from "../models/cart.model.js";
import UserCart from "../models/userCart.model.js";
import User from "../models/user.model.js";
import mongoose from "mongoose";
import Order from "../models/order.model.js";

export const sendCard = async (req, res) => {
  try {
    const details = req.body;
    const userId = req.session.userId;

    // Validate required fields
    if (!details.name || !details.width || !details.height || !details.glass) {
      return res.status(400).json({ error: "Fill all the details" });
    }

    // Fetch user details
    const temp = await User.findOne({ _id: userId });
    console.log(temp);

    if (!temp) {
      return res.status(404).json({ error: "User not found" });
    }

    // Create a new Cart object
    const newCart = new Cart({
      color: details.color,
      glass: details.glass,
      pic: details.pic,
      name: details.name,
      width: details.width,
      height: details.height,
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
    const details = req.body;
    const userId = req.session.userId;

    const customer = await User.findById(req.session.userId);

    const cart = await UserCart.findOne({ user: userId });

    const cartToAdd = await UserCart.findOne({ user: userId }).populate(
      "items"
    );

    const newOrder = new Order({
      user: userId,
      items: cartToAdd.toObject(),
      location: customer.location,
      customerName: customer.userName,
      email: customer.email,
      type: customer.type,
      phoneNumber: customer.phoneNumber,
    });
    await newOrder.save();

    cart.items = [];

    await cart.save();

    res.status(200).json({ err: "Order Successful" });
  } catch (err) {
    console.error("Error in order:", err);
    res.status(500).json(err);
  }
};

export const getAllOrders = async (req, res) => {
  if (!req.session.userId) {
    return res.status(400).json({ err: "You are not logged in" });
  }
  const customer = await User.findById(req.session.userId);

  if (customer.email !== "yajat.kaul@gmail.com") {
    return res.status(400).json({ err: "Unauthorized" });
  }
  const orders = await Order.find();

  res.status(200).json(orders);
};
