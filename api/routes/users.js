/* eslint-disable quotes */
/* eslint-disable semi */
const { Router } = require("express");

const router = Router();

// Mock Users
// const users = [{ name: "Alexandre" }, { name: "Pooya" }, { name: "Sébastien" }];

/* GET users listing. */
router.get("/users", function (req, res, next) {
  const connection = req.app.get("connection");

  connection.query("SELECT * FROM users", (error, results) => {
    if (error) {
      console.error("Error fetching users:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
});

/* GET user by ID. */
router.get("/users/:id", function (req, res, next) {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < users.length) {
    res.json(users[id]);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
