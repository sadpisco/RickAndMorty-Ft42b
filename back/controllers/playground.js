const axios = require('axios');
const { Character, Episode, Location } = require('../database');

const playground = async function(req, res){
    try {
        res.status(202).json({info: "This is a safe place to practice."});
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message);
    };
};

module.exports = playground;