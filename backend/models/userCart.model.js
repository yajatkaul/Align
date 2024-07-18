import mongoose from "mongoose";

//Schema
const userCartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart",
        required: false,
      },
    ],
  },
  { timestamps: true }
);

const UserCart = mongoose.model("UserCart", userCartSchema);

export default UserCart;
