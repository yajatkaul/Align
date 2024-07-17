import Cart from "../models/cart.model.js";

export const sendCard = async (req, res) => {
  try {
    const details = req.body;

    if (
      !details.name ||
      !details.width ||
      !details.height ||
      !details.glass ||
      !details.customerName ||
      !details.companyName ||
      !details.phoneNumber ||
      !details.location ||
      !details.email ||
      !details.type
    ) {
      return res.status(400).json("Fill all the details");
    }

    const newCart = new Cart(details);

    await newCart.save();

    res.status(200).json("Order Placed");
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err.message });
  }
};
