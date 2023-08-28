const express = require("express");
const router = express.Router();

const Category = require("../models/category");

router.get("/", async (req, res) => {
  try {
    res.status(200).send(await Category.find().populate("tasks"));
  } catch (error) {
    res.status(400).send({ message: error._message });
  }
});

router.post("/", async (req, res) => {
  const newCategory = new Category({
    name: req.body.name,
  });
  await newCategory.save();
  res.send(newCategory);
});

module.exports = router;
