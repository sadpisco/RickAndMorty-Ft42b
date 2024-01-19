const axios = require('axios');
const { Character, Location, Episode } = require('../database');

const registerLocationsFromApi = async function (req, res) {
    try{
        for(let i = 1; i <= 126; i++){
            const endPoint = `https://rickandmortyapi.com/api/location/${i}`;
            const { data } = await axios.get(endPoint);
            const registerLoc = await Location.create({
                id: data.id,
                name: data.name,
                type: data.type,
                dimension: data.dimension,
                url: data.url
            });
            data.residents.map( async (element) => {
                let relationValue = element.split("/");
                let valor = Number(relationValue[5]);
                let charToRelate = await Character.findAll({
                    where: { id: valor }
                });
                await registerLoc.addCharacter(charToRelate)
            });
            console.log(`Location ID ${data.id} has succesfully been registered.`);
        }
        res.status(200).send(`Locations has successfully been registered.`);
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message);
    };
};

module.exports = registerLocationsFromApi;