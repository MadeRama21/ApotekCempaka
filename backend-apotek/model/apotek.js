const mongoose = require("mongoose");

//Membuat schema
const Apotek = mongoose.model("Apotek", {
  kodeObat: {
    type: String,
    required: true,
  },
  jenisObat: {
    type: String,
    required: true,
  },
  namaObat: {
    type: String,
    required: true,
  },
  indikasi: {
    type: String,
    required: true,
  },
  expired: {
    type: Date,
    required: true,
  },
  bentukObat: {
    type: String,
    required: true,
  },
});

module.exports = Apotek;
