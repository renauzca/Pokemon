const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getAllTypes} = require('../funciones/indexTypes')


const routerType = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
routerType.get("/", getAllTypes)

module.exports = routerType;
