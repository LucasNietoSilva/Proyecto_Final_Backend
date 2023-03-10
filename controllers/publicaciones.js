const knex = require("../config/knexfile");

exports.mostrarPublicaciones = (req, res) => {
  knex("publicaciones_inmobiliaria")
    .then((resultado) => {
      res.json(resultado);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

exports.buscarPublicacion = (req, res) => {
  const id = Number(req.params.id);
  knex("publicaciones_inmobiliaria as p")
    .where("p.propiedad_id", "=", id)
    .join("imagenes_propiedad as im", "p.propiedad_id", "im.publicacion_id")
    .then((resultado) => {
      console.log(resultado)
      res.json(resultado);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

exports.agregarPublicacion = (req, res) => {
  const nuevaPub = req.body;
  knex("publicaciones_inmobiliaria")
    .insert(nuevaPub)
    .then(() => {
      res.json({ message: "se ha agregado una nueva publicacion" });
    })
    .catch((error) => {
      res.status(400).json({
        error: error.message,
      });
    });
};
