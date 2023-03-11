const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./imgs_back");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + ".jpg");
  },
});

/* const storage = multer.diskStorage({
  destination: path.join(__dirname, "../public/uploads"),
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
}); */

const upload = multer({ storage: storage });

exports.upload = upload.single("image");

/* exports.directorio = () => {
  return "C:/Senpai/A_Proyecto_Final/Proyecto_Final_Backend";
};
 */
/* const storage = multer.diskStorage({
    destination: path.join(__dirname, "/imgs_back"),
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }); */
