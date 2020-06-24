const express = require("express");
const router = express.Router();
const userController = require("../controllers/User");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/get", userController.getAllData);
router.get("/get/:usersId", userController.getDataById);
router.delete("/delete/:usersId", userController.deleteById);
module.exports = router;
