const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Apotek");



// // Menambah 1 data
// const Apotek1 = new Apotek({
//   kodeObat: "23233433",
//   jenisObat: "berat",
//   namaObat: "Paramex",
//   indikasi: "sesak nafas",
//   expired: "2024-04-09",
//   bentukObat: "tablet",
// });

// // Simpan ke collection
// Apotek1.save().then((Apotek) => console.log(Apotek));
