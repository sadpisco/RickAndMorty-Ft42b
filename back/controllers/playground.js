const axios = require('axios');
const { Character, Episode, Location } = require('../database');

const playground = async function(req, res){
    try {
        const endPoint = `https://rickandmortyapi.com/api/character/1`;
        const { data } = await axios.get(endPoint);
        console.log(data.episode);
        res.status(202).json(data.episode.length);
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message);
    };
};

module.exports = playground;