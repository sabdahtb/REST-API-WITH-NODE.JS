const express = require("express");
const router = require("./router/route.js");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

//? Routing and Handling ||||||||||||||||||||||||||||
app.get("/", router);
app.post("/nama", router);
app.get("/buku", router);
app.get("/detail/:id", router);
app.put("/update/:id", router);
app.delete("/delete/:id", router);

app.use("/", (req, res) => {
  res.send("<h1>404</h1>");
});

//? Connect ke DB |||||||||||||||||||||||||||||||||||
mongoose.connect("mongodb://127.0.0.1:27017/perpustakaan", () =>
  console.log("DB Connected")
);

//? Connect ke Port 3000 ||||||||||||||||||||||||||||
app.listen("3000", () => console.log("Perpustakaan App || Port : 3000"));
