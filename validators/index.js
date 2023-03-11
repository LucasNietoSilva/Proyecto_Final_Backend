const { validationResult } = require("express-validator");

exports.runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ error: errors.array()[0].msg });
  }
  next();
};
// Este primer middleware ejecuta las validaciones y verifica si esta todo OK o si hay errores
