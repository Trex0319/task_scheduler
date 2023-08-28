const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const taskSchema = new Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  title: {
    type: String,
    required: true,
  },
  description: String,
  dueDate: Date,
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Completed", "Overdue"],
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
  },
  tasks: { type: Schema.Types.ObjectId, ref: "Category" },
});

const Task = model("Task", taskSchema);
module.exports = Task;
