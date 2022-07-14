const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getAllApi, getId, postPokemon} = require('../funciones/indexPokemon')


const routerPokemon = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
routerPokemon.get("/", getAllApi)
routerPokemon.get("/", getId)
routerPokemon.post("/", postPokemon)


module.exports = routerPokemon;
