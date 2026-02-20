const express = require("express");
const router = express.Router();
const authController = require("../modules/auth/auth.controller");

router.post("/signup", authController.signup);
router.post("/login", authController.login);

module.exports = router;
