const express = require("express");
const Buku = require("../models/model");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home", {
    layout: "layouts/main",
    title: "Perpustakaan App",
  });
});

router.get("/tabel", async (req, res) => {
  const bukus = await Buku.find();
  try {
    res.render("tabel", {
      layout: "layouts/main",
      title: "Manajemen Buku",
      bukus,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.get("/manajemen", async (req, res) => {
  const bukus = await Buku.find();
  try {
    res.render("manajemen", {
      layout: "layouts/main",
      title: "Manajemen Buku",
      bukus,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.post("/addbuku", async (req, res) => {
  const buku = new Buku(req.body);
  try {
    await buku.save();
    res.redirect("manajemen");
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.put("/manajemen", async (req, res) => {
  updatedBuku = await Buku.updateOne({ _id: req.body.id }, { $set: req.body });
  try {
    res.redirect("manajemen");
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.delete("/manajemen", async (req, res) => {
  deletedBuku = await Buku.deleteOne({ _id: req.body.id });
  try {
    res.redirect("manajemen");
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
