import mongoose from "mongoose";

//Schema
const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: {
      type: JSON,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

orderSchema.index({ createdAt: 1 });
orderSchema.index({ updatedAt: 1 });

const Order = mongoose.model("Order", orderSchema);

export default Order;
