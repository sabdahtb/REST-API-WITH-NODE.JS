const express = require("express");
const Buku = require("../models/model");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Halo Gaes");
});

router.post("/nama", async (req, res) => {
  const buku = new Buku(req.body);
  try {
    await buku.save();
    res.send("data ditambahkan");
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.get("/buku", async (req, res) => {
  bukus = await Buku.find();
  try {
    res.send(bukus);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.get("/detail/:id", async (req, res) => {
  buku = await Buku.findOne({ _id: req.params.id });
  try {
    res.send(buku);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.put("/update/:id", async (req, res) => {
  updatedBuku = await Buku.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  try {
    res.send(updatedBuku);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  deletedBuku = await Buku.deleteOne({ _id: req.params.id });
  try {
    res.send(deletedBuku);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
