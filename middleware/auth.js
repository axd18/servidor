const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    // Leer token del header
    const token = req.header('x-auth-token');

    console.log(token)

    // revisar si no hay token
    if(!token) {
        return res.status(401).json({msg: "no hay Token, permiso no válido"})
    }

    // Validar el token
    try {
        const cifrado = jwt.verify(token, process.env.SECRETA);
        req.usuario = cifrado.usuario;
        next();
    } catch (error) {
        res.status(401).json({msg: "Token no válido"})
    }
}