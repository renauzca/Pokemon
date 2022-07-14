const axios = require('axios')
const {Pokemon, Type} = require('../../db')
const link = 'https://pokeapi.co/api/v2/pokemon'


const getAllApi = async (req, res)=>{
    // imagen, nombre, tipo

     const callApi = await axios.get(link)
     const callApiNext = await axios.get(callApi.data.next)
     const callFinish = callApi.data.results.concat(callApiNext.data.results)
     const url = await callFinish.map(e =>{return e.url})

    let arrayPokemonApi = []
    for(let i =0; i<= 5; i++ ){
        const link2 = await axios(url[i])
        arrayPokemonApi.push({
            id: link2.data.id,
            name: link2.data.name,
            weight: link2.data.weight,
            height: link2.data.height,
            types: link2.data.types,
            // speed: link2.data.speed,
            // defense
            // attack
            // hp

        })
    }


    
try {
    res.send(arrayPokemonApi)
} catch (error) {
    console.log(error + "al traer de la api");
}



    
}























const getId = ()=>{}
const postPokemon = ()=>{}

module.exports = {getAllApi, getId, postPokemon}