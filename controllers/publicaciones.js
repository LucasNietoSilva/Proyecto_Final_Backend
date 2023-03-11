const knex = require("../config/knexfile");

exports.mostrarPublicaciones = (req, res) => {
  knex("publicaciones_inmobiliaria")
    .then((resultado) => {
      res.json(resultado);
    })
    .catch((error) => {
      console.log(error);
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
    /*     .returning("propiedad_id") */
    .catch((error) => {
      res.status(400).json({
        error: error.message,
      });
    });
};
/*     exports.agregarImg = (req, res) => {
      req.getConnection((err, conn) => {
        if (err) return res.send(err);
        const type = req.file.mimetype;
        const name = req.file.originalname;
        const date = fs.readFileSync(
          path.join(__dirname, "../imgs_back/" + req.file.filename)
        );
        knex("publicaciones_inmobiliaria").insert;
      };



    conn.query(
      "INSERT INTO " + req.params.tabla + " set ?",
      [{ type, name, date }],
      (err, rows) => {
        console.log(
          err
            ? "Err INSERT INTO " + req.params.tabla + " " + err
            : req.params.tabla + ": Image added!"
        );
        res.json(
          err
            ? { err: "Error al cargar la imagen" }
            : { msg: "Imagen cargada satisfactoriamente" }
        );
      }
    );
  });
}; */

exports.filtrarPublicaciones = (req, res) => {
  const depto = req.query.departamento;
  const estado = req.query.estado;
  const inmueble = req.query.inmueble;
  const dormitorios = Number(req.query.numeroDeDormitorios);
  knex("publicaciones_inmobiliaria as p")
    .where("p.departamento", "=", depto)
    .where("p.estado", "=", estado)
    .where("p.tipo", "=", inmueble)
    /* .where("p.dormitorios", "=", dormitorios) */
    .then((resultado) => {
      res.json(resultado);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
