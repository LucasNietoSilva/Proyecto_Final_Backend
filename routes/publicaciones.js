const express = require("express");

const {
  mostrarPublicaciones,
  buscarPublicacion,
  agregarPublicacion,
  filtrarPublicaciones,
  /*   agregarImg, */
} = require("../controllers/publicaciones");
const { upload } = require("../middlewares/upload-img");

const router = express.Router();

router.get("/publicaciones", mostrarPublicaciones);
router.get("/buscar/:id", buscarPublicacion);
router.get("/publicaciones-buscar", filtrarPublicaciones);
router.post("/publicaciones/nuevo", /* upload, */ agregarPublicacion);

module.exports = router;
