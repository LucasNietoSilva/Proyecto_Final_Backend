const { check } = require("express-validator");

exports.emailValidator = [
  check("email")
    .normalizeEmail()
    .isEmail()
    .withMessage("El campo debe contener un email"),
];
