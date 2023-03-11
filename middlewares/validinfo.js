exports.validinfo = function (req, res, next) {

    const { email, nombre, password } = req.body;

    function validEmail(email) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    } 

    if(req.path === "/register") {

        if(! [email, nombre, password].every(Boolean)) {
            return res.status(401).json('Uno o más campos están vacíos, por favor complételos.');
        } else if(!validEmail(email)) {
            return res.status(401).json('Email inválido');
        }
    } else if(req.path === "/login") {

        if(![email, password].every(Boolean)) {
            return res.status(401).json('Falta información.');
        } else if(!validEmail(email)) {
            return res.status(401).json('Email inválido.');
        }
       
    }

    next();
}