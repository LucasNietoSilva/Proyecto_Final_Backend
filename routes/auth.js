const express = require("express");
const { default: knex } = require("knex");
const { register, login } = require("../controllers/auth");
const { emailValidator } = require("../validators/email");
/* const { Router } = require("express"); */
const bodyParser = require('body-parser');

const router = express.Router();
router.post("/register", emailValidator, register);

router.post("/login", 
// emailValidator, login, 
(req, res)=> {
    const {email, password} = req.body
    const values = [email, password]
    
    conexion.query("SELECT * FROM users_inmobiliaria WHERE email = ? AND password = ?", values, (err, result)=>{
        if (err){
            res.status(500).send(err)
        }else{
            if(result.lenght > 0){
                res.status(200).send(result[0])
            }else{
                res.status(400).send('Usuario no encontrado.')
            }
        }
    })
    conexion.end()
});

module.exports = router;
