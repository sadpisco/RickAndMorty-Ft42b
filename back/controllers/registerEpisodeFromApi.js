const axios = require('axios');
const { Character, Location, Episode } = require('../database');

const registerEpisodesAndRelations = async function (req, res) {
    try {
        for(let i = 1; i <= 52; i++){
        const endPoint = `https://rickandmortyapi.com/api/episode/${i}`;
        const { data } = await axios.get(endPoint);
        let season = Number(data.episode[1] + data.episode[2]);
        let episode = Number(data.episode[4] + data.episode[5]);
        const registerEp = await Episode.create({
            id: data.id,
            name: data.name,
            airDate: data.air_date,
            season: season,
            number: episode
        });
        data.characters.map( async (element) => {
            let relationValue = element.split("/");
            let valor = Number(relationValue[5]);
            let charToRelate = await Character.findAll({
                where: { id: valor }
            });
            await registerEp.addCharacter(charToRelate);
        });
        console.log(`Episode ID ${data.id} has succesfully been registered.`);
        }
        res.status(200).send(`Episodes has successfully been registered.`);
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message);
    };
};

module.exports = registerEpisodesAndRelations;