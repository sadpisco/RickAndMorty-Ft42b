//Imports
const { Router } = require("express");
const axios = require('axios');
const router = Router();
const playground = require('../controllers/playground');
const registerCharactersDB = require('../controllers/registerCharactersFromApi');
const registerEpisodesAndRelations = require('../controllers/registerEpisodeFromApi');
const registerLocationsFromApi = require("../controllers/registerLocationsFromApi");
const getAllCharacters = require("../handlers/Characters/getAllCharacters");
const getAllLocations = require("../handlers/Locations/getAllLocations");
const getAllEpisodes = require("../handlers/Episodes/getAllEpisodes");
const firstCharacters = require("../handlers/Characters/firstCharacters");

//MAIN LOBBY
router.get('/', async(req, res) => {
    try {
        res.status(202).json({status: true, message: "Main Lobby"});
    } catch (error) {
        res.status(404).send({status: false, message: error.message});
    }
    });

//Registering info of RYM API to DB.
//Here we brought all the information and relations from the API to the dabase.
router.get('/registerCharacters', registerCharactersDB); //First
router.get('/registerEpisodes', registerEpisodesAndRelations); //Second
router.get('/registerLocations', registerLocationsFromApi); //Third

//PLAYGROUND
router.get('/playground', playground);

//DATABASE ALL QUERIES
router.get('/characters', getAllCharacters);
router.get('/locations', getAllLocations);
router.get('/episodes', getAllEpisodes);

//FRONT REQUIREMENTS
//Characters
router.get('/firstCharacters', firstCharacters);
// router.get('/paginatedCharacters/:page', paginatedCharacters);

module.exports = router;