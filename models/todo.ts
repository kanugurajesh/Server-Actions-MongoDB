import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    todo: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    // set the timestamps to true
  },
  { timestamps: true }
);

const todo = mongoose.model("todo", todoSchema);

export { todo };