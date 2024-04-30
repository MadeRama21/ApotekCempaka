const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { body, validationResult, check } = require("express-validator");
const methodOverride = require("method-override");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
require("./utils/db");
const Apotek = require("./model/apotek");

const app = express();
const port = 5000;

//setup method override
app.use(methodOverride("_method"));

// gunakan ejs
app.set("view engine", "ejs");
//Third party middleware

app.use(expressLayouts);

//Built in middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//Konfigurasi flash
app.use(cookieParser("secret"));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

// halaman home
app.get("/", (req, res) => {
  res.render("index", {
    layout: "layout/main-layout",
    title: "Halaman Home",
  });
});

app.get("/apotek", async (req, res) => {
  const dataApoteks = await Apotek.find();
  res.render("apotek", {
    layout: "layout/main-layout",
    title: "Halaman Data Obat",
    dataApoteks,
    msg: req.flash("msg"),
  });
});

// halaman form tambah data obat
app.get("/apotek/add", (req, res) => {
  res.render("add-obat", {
    title: "Form Tambah data Obat",
    layout: "layout/main-layout",
  });
});

//proses tambah data obat

app.post(
  "/apotek",
  [
    body("kodeObat").custom(async (value) => {
      const duplikat = await Apotek.findOne({ kodeObat: value });
      if (duplikat) {
        throw new Error("Kode Obat sudah digunakan!");
      }
      return true;
    }),
    check("kodeObat", "Format Kode obat salah!").matches(/^[A-Z0-9]{3}$/),
    check("indikasi", "Indikasi tidak valid").matches(/^[a-zA-Z0-9\s]+$/),
    check("expired", "Tanggal Kadeluarsa tidak valid").isDate(),
    check("jenisObat", "Tolong pilih jenis obat!").matches(/^[a-zA-Z0-9\s]+$/),
    check("bentukObat", "Tolong pilih bentuk data!").matches(/^[a-zA-Z0-9\s]+$/),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array() });
      res.render("add-obat", {
        title: "Form Tambah data Obat",
        layout: "layout/main-layout",
        errors: errors.array(),
        kodeObat: req.body.kodeObat,
        jenisObat: req.body.jenisObat,
        namaObat: req.body.namaObat,
        indikasi: req.body.indikasi,
        expired: req.body.expired,
        bentukObat: req.body.bentukObat,
      });
    } else {
      await Apotek.insertMany(req.body);
      req.flash("msg", "Data Obat berhasil ditambahkan!");
      res.redirect("/apotek");
    }
  }
);

// proses delete data
// app.get("/apotek/delete/:kodeObat", async (req, res) => {
//   const dataApoteks = await Apotek.findOne({ kodeObat: req.params.kodeObat });
//   // jika data obat tidak ada
//   if (!dataApoteks) {
//     res.status(404);
//     res.send("<h1>404 Not found</h1>");
//   } else {
//     await Apotek.deleteOne({ kodeObat: req.params.kodeObat });
//     req.flash("msg", "Data Obat berhasil dihapus!");
//     res.redirect("/apotek");
//   }
// });

app.delete("/apotek/:kodeObat", async (req, res) => {
  await Apotek.deleteOne({ kodeObat: req.params.kodeObat });
  req.flash("msg", "Data Obat berhasil dihapus!");
  res.redirect("/apotek");
});

// halaman form update data obat
app.get("/apotek/update/:kodeObat", async (req, res) => {
  const dataApoteks = await Apotek.findOne({ kodeObat: req.params.kodeObat });

  res.render("update-obat", {
    title: "Form Edit data Obat",
    layout: "layout/main-layout",
    dataApoteks,
  });
});

// Proses update data obat
app.put(
  "/apotek",
  [
    body("kodeObat").custom(async (value, { req }) => {
      const duplikat = await Apotek.findOne({ kodeObat: value });
      if (value !== req.body.kodeLama && duplikat) {
        throw new Error("Kode Obat sudah terdaftar!");
      }
      return true;
    }),
    check("kodeObat", "Kode obat tidak valid!").matches(/^[A-Z0-9]+$/),
    check("indikasi", "Indikasi tidak valid").matches(/^[a-zA-Z0-9\s]+$/),
    check("expired", "Tanggal Kadeluarsa tidak valid").isDate(),
    check("jenisObat", "Jenis Obat tidak valid!").matches(/^[a-zA-Z0-9\s]+$/),
    check("bentukObat", "Bentuk Obat tidak valid!").matches(/^[a-zA-Z0-9\s]+$/),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array() });
      res.render("update-obat", {
        title: "Form Ubah data Obat",
        layout: "layout/main-layout",
        errors: errors.array(),
        dataApoteks: req.body,
      });
    } else {
      const formattedDate = new Date(req.body.expired).toISOString().split("T")[0];
      await Apotek.updateOne(
        { _id: req.body._id },
        {
          $set: {
            kodeObat: req.body.kodeObat,
            jenisObat: req.body.jenisObat,
            namaObat: req.body.namaObat,
            indikasi: req.body.indikasi,
            expired: formattedDate,
            bentukObat: req.body.bentukObat,
          },
        }
      );
      //kirimkan flash message
      req.flash("msg", "Data Obat berhasil diubah!");
      res.redirect("/apotek");
    }
  }
);

// halaman detail obat
app.get("/apotek/:kodeObat", async (req, res) => {
  //   const dataApoteks = findData(req.params.kodeObat);
  const dataApoteks = await Apotek.findOne({
    kodeObat: req.params.kodeObat,
  });
  res.render("detail", {
    layout: "layout/main-layout",
    title: "Halaman detail data obat",
    dataApoteks,
  });
});

app.listen(port, () => {
  console.log(`Mongo Apotek App | listening at http:/localhost:${port}`);
});
