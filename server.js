const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/taskscheduler")
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

const categoryRouter = require("./routes/category");
const taskRouter = require("./routes/task");

app.use("/category", categoryRouter);
app.use("/task", taskRouter);

app.get("/", (req, res) => {
  res.send("<a href='/movies'>Movies</a>");
});

app.listen(2000, () => {
  console.log("Server is running on port http://localhost:2000");
});
