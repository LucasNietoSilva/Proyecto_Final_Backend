const knex = require("../config/knexfile");
const bcrypt = require("bcryptjs");
// const { verifyToken, TOKEN_SECRET } = require("../middlewares/validate-jwt");

const jwt = require("jsonwebtoken");
require("dotenv").config();



exports.consultas = async (req, res) => {
  console.log(req.body);
  const consultasUser = {
    nombreyapellido: req.body.nombre_apellido,
    email: req.body.email,
    consulta: req.body.consulta
  }

  knex("consultas_inmobiliaria")
    .insert(consultasUser)
    .then(() => {
      res.status(200).json({success: true, consultasUser: consultasUser});
    })
    .catch((error) => {
      res.status(400).json({
        error: error.message,
      });
    });
};

exports.register = async (req, res) => {
  console.log(req.body);
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);

  const newUser = {
    email: req.body.email,
    password: password,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    fecha_nacimiento: req.body.fecha_nacimiento,
    departamento: req.body.departamento,
  };

  knex("users_inmobiliaria")
    .insert(newUser)
    .then(() => {
      res.status(200).json({ success: true, newUser: newUser });
    })
    .catch((error) => {
      res.status(400).json({
        error: error.message,
      });
    });
};


exports.login = async (req, res) => {

  const usuario = {
    email: req.body.email,
    password: req.body.password,
  }
  await knex
    .from("users_inmobiliaria")
    .where("email", usuario.email)
    .then(async (logued) => {
      let user = logued[0];
      console.log(user);
      if (!usuario.email) {
        return res.status(400).json({ error: "Email incorrecto" });
      }
      const validPassword = await bcrypt.compare(usuario.password, user.password);
      if (!validPassword) {
        return res.status(400).json({ error: "Contraseña no válida" });
      }
      const token = jwt.sign(
        {
          id: user.id,
          name: user.nombre,
          email: user.email,
          permisos: user.permisos
        },
        process.env.TOKEN_SECRET
      )
      res.status(200).json({ error: null, data: "Login exitoso", token });
    })
    .catch(() => {
      res.status(400).json({ error: error.message });
    });
};
