import mongoose from "mongoose";

//Schema
const userSchema = new mongoose.Schema(
  {
    displayName: {
      type: String,
      required: true,
      minlength: 5,
    },
    userName: {
      type: String,
      required: true,
      minlength: 5,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;