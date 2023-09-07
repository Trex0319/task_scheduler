const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const corsHandler = cors({
  origin: "*",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200,
  preflightContinue: true,
});

app.use(corsHandler);

mongoose
  .connect("mongodb://127.0.0.1:27017/taskscheduler")
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

const categoryRouter = require("./routes/category");
const taskRouter = require("./routes/task");

app.use("/category", categoryRouter);
app.use("/task", taskRouter);

app.get("/", (req, res) => {
  res.send("<a href='/task'>Movies</a>");
});

app.listen(2000, () => {
  console.log("Server is running on port http://localhost:2000");
});
