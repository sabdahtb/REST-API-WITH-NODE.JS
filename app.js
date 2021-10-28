const express = require("express");
const router = require("./router/route.js");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");
const MethodOverride = require("method-override");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//? Config express ejs layout |||||||||||||||||||||||
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(MethodOverride("_method"));

//? Routing and Handling ||||||||||||||||||||||||||||
app.get("/", router);
app.get("/tabel", router);
app.get("/manajemen", router);
app.post("/addbuku", router);
app.put("/manajemen", router);
app.delete("/manajemen", router);

app.use("/", (req, res) => {
  res.send("<h1>404</h1>");
});

//? Connect ke DB |||||||||||||||||||||||||||||||||||
mongoose.connect("mongodb://127.0.0.1:27017/perpustakaan", () =>
  console.log("DB Connected")
);

//? Connect ke Port 3000 ||||||||||||||||||||||||||||
app.listen("3000", () => console.log("Perpustakaan App || Port : 3000"));
