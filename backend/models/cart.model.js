import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema(
  {
    color: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      required: true,
    },
    glass: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    remarks: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
