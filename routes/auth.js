const express = require("express");
const { default: knex } = require("knex");
const { register, login, token } = require("../controllers/auth");
const { emailValidator } = require("../validators/email");
const { validinfo} = require("../middlewares/validinfo")
/* const { Router } = require("express"); */
const bodyParser = require('body-parser');

const router = express.Router();

 router.post("/register", validinfo, register);

 router.post("/login", validinfo, login);


module.exports = router;