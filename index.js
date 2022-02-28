const express = require("express");
const client = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("mongodb connected successfully"))
  .catch((err) => console.log(err));

client.use("/", (req, res) => {
  console.log("this is main url");
});

client.listen("5000", () => {
  console.log("backend is running");
});
