const express = require('express');
const conectarDB = require('./config/db');

// crear el servidor
const app = express();

// Conectar a la basde de datos
conectarDB();

// Habilitar express.json
app.use(express.json({ extended: true }));

// puerto de la app 
const PORT = process.env.PORT || 4000;

// definir la pagina principal
// app.get('/', (req, res) => {
//     res.send('Hola Mundo')
// });

// Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));

// arrancar la app
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});

