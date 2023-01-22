const { Router } = require("express");
const router = Router();
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const { validate } = require("../models/user.model");

// function validateUser(hash) {
//   bcrypt
//     .compare(password, hash)
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => console.error(err.message));
// }

router.get("/", async (req, res) => {
  const register = userModel.populate;
  const users = await userModel.find();
  res.json({ users });
});

router.post("/connexion", async (req, res) => {
  let user = await userModel.findOne({ email: req.body.email });
  if (user) {
    const match = await bcrypt.compare(req.body.password, user.password);
    if (match) {
      res.send("ok");
      //genereate jwt token

      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      user.token = token;
      // send token
    } else {
      res.send("ko");
    }
  } else {
    res.send("no user found");
  }
});

const jwt = require("jsonwebtoken")

router.post("/", async (req, res) => {
  const current = new Date();
  const Userbirthdate = new Date(req.body.birthdate);
  const UserAge = current.getFullYear() - Userbirthdate.getFullYear();
  console.log(UserAge);
  if (UserAge < 18) {
    return res.status(400).send("vous êtes trop jeune");
  } else {
    let user = await userModel.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send("Cet utilisateur existe déjà");
    } else {
      const password = await bcrypt.hash(req.body.password, 10);
      user = new userModel({
        name: req.body.name,
        surname: req.body.name,
        email: req.body.email,
        password: password,
        birthday: req.body.birthday,
        genre: req.body.genre,
        city: req.body.city,
        hobbies: req.body.hobbies,
      });
      await user.save();
      res.json({ user });
    }
  }
});

module.exports = router;
