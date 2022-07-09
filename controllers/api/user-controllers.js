const router = require("express").Router();
const { User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(userData);
  } catch (err) {
    res.json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;
      req.session.name = newUser.name;
      res.json(newUser);
    });
  } catch (err) {
    res.json(err);
  }
});

router.post("/login", async (req, res) => {
  // console.log(req.body);
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!user) {
      res.status(400).json({ msg: `No user found` });
      return;
    }
    const validPassword = user.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ msg: `Incorrect password!` });
      return;
    }
    req.session.save(() => {
      req.session.userId = user.id;
      req.session.logged_in = true;
      req.session.username = user.name;
      res.json({ message: "You are now logged in" });
    });
  } catch (err) {
    res.json({ message: "triggered err" });
  }
});

module.exports = router;
