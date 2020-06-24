// Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioCorntroller');

// Crea un usuario
// se enviará a api/usuarios
router.post('/', 
    usuarioController.crearUsuario
);

module.exports = router;