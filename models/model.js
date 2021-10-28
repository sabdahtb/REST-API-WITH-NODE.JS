const mongoose = require("mongoose");

const Buku = mongoose.Schema({
  judul: {
    type: String,
    required: true,
  },
  pengarang: {
    type: String,
    required: true,
  },
  tahun: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Buku", Buku);
