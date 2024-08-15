import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema(
  {
    color: {
      type: String,
    },
    pic: {
      type: String,
      required: true,
    },
    glass: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    width: {
      type: String,
    },
    height: {
      type: String,
    },
    remarks: {
      type: String,
    },
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
