const express = require("express");
const client = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./Routes/auth");
dotenv.config();
client.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("mongodb connected successfully"))
  .catch((err) => console.log(err));

client.use("/API/auth", authRoute);

client.listen("5000", () => {
  console.log("backend is running");
});
