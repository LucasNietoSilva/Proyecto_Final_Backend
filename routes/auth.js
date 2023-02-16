const express = require("express");

const { register, login } = require("../controllers/auth");
const { emailValidator } = require("../validators/email");
/* const { Router } = require("express"); */

const router = express.Router();

router.post("/register", emailValidator, register);

router.post("/login", emailValidator, login);

module.exports = router;
