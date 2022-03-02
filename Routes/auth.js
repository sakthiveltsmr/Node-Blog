const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../modules/User");

//register
router.post("/register", async (req, res) => {
  console.log("Register Process");
  try {
    const salt = await bcrypt.genSalt(10); //gen string rounds 10
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    //User sChema here
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });
    const user = await newUser.save();
    res.status(200).send({ register: "user registered successfully", user });
  } catch (err) {
    console.log(err);
    res.status(500).send({ Error: "Error in register", error: err });
  }
});

module.exports = router;
