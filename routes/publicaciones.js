const express = require("express");

const {
  mostrarPublicaciones,
  buscarPublicacion,
  agregarPublicacion,
  filtrarPublicaciones,
} = require("../controllers/publicaciones");

const router = express.Router();

router.get("/publicaciones", mostrarPublicaciones);
router.get("/buscar/:id", buscarPublicacion);
router.get("/publicaciones-buscar", filtrarPublicaciones);
router.post("/publicaciones/nuevo", agregarPublicacion);

module.exports = router;
