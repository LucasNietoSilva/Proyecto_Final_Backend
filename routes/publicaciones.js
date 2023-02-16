const express = require("express");

const {
  mostrarPublicaciones,
  buscarPublicacion,
  agregarPublicacion,
} = require("../controllers/publicaciones");

const router = express.Router();

router.get("/publicaciones", mostrarPublicaciones);
router.get("/buscar/:id", buscarPublicacion);
router.post("/publicaciones/nuevo", agregarPublicacion);

module.exports = router;
