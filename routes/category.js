const express = require("express");
const router = express.Router();

const Category = require("../models/category");

router.get("/", async (req, res) => {
  try {
    res.status(200).send(await Category.find().populate("tasks"));
  } catch (error) {
    res.status(400).send({ message: "category not found" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newCategory = new Category({
      name: req.body.name,
    });
    await newCategory.save();
    res.status(200).send(newCategory);
  } catch {
    res.status(400).send({ message: error._message });
  }
});

module.exports = router;
