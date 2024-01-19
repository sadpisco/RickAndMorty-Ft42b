const axios = require('axios');
const { Character, Location, Episode } = require('../database');

const registerCharactersDB = async function (req, res) {
    try {
        for(let i = 1; i <= 827; i++){
        const endPoint = `https://rickandmortyapi.com/api/character/${i}`
        const { data } = await axios.get(endPoint);
        const newRegister = await Character.findOrCreate({
            where: {
                id: data.id,
                name: data.name,
                status: data.status,
                species: data.species,
                type: data.type,
                gender: data.gender,
                origin: data.origin.name,
                location: data.location.name,
                locationUrl: data.location.url,
                image: data.image,
                url: data.url
            }});
        console.log(`Character ID ${data.id} has succesfully been registered.`);
        };
        res.status(202).send(`Characters has successfully been registered.`);
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message);
    };
};


module.exports = registerCharactersDB;