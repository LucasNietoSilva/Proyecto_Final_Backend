const jwt = require('jsonwebtoken');
require('dotenv').config(); 

const TOKEN_SECRET = process.env.TOKEN_SECRET

const verifyToken = (req, res, next) => {
    const token = req.header("auth-token")
    if (!token) {
        return res.status(401).json({ error: "Acceso denegado"})
    }
    try {
        const verified = jwt.verify(token, TOKEN_SECRET)
        req.user = verified
        next();
    }
    catch (error) {
                 return res.status(403).json('No autorizado');   
             }
}

module.exports = (verifyToken, TOKEN_SECRET);





// exports.token = function (req, res, next) {
//     try {
//         const jwtToken = req.header('token');
        
//         // If no token returned, decline authorization
//         if(!jwtToken) {

//             return res.status(403).json('No autorizado');
//         }

//         // verify token, get user id
//         const payload = jwt.verify(jwtToken, process.env.jwtSecret);

//         req.user = payload.user;

//         next();

        
//     } catch (err) {
//         return res.status(403).json('No autorizado');   
//     }
// };