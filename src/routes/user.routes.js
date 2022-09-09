const route = require("express").Router();

// controllers
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controllers");

// normal:
route.get("/:id", getUser);
route.get("/", getUsers);
route.post("/", createUser);
route.put("/:id", updateUser);
route.put("/password/:id", updateUser);
route.delete("/:id", deleteUser);

module.exports = route;
