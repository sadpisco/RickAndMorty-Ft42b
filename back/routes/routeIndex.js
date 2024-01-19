//Imports
const { Router } = require("express");
const axios = require('axios');
const router = Router();
const playground = require('../controllers/playground');
const registerCharactersDB = require('../controllers/registerCharactersFromApi');
const registerEpisodesAndRelations = require('../controllers/registerEpisodeFromApi');
const registerLocationsFromApi = require("../controllers/registerLocationsFromApi");

//Main Lobby
router.get('/', async(req, res) => {
try {
    res.status(202).json("Main Lobby");
} catch (error) {
    res.status(404).send(error.message);
}
});

//First Raw response from API from the characters.
//Just for understanding purposes, (no action dispatachs this endPoint).
router.get('/apiCharacters', async (req, res) => {
    try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character`);
        res.status(202).json(data);
    } catch (error) {
        console.log(error.message);
        res.status(404).send(error.message);
    };
});

//Fetchs just the first 20 characters bc of information order from API.
//Perfect to start the app with some of them redered.
//The endpoint just allows you to access the total of 826 but individually.
router.get('/first20Characters', async (req, res) => {
    try {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character`);
    const processedData = data.results.map((element) => {
        return {
            id: element.id,
            name: element.name,
            status: element.status,
            species: element.species,
            type: element.type,
            gender: element.gender,
            origin: element.origin.name,
            url: element.url,
            location: element.location.name,
            locationImage: element.location.image,
            image: element.image,
        };
    });
    res.status(202).json(processedData);
    } catch (error){
        console.log(error.message);
        res.status(404).send(error.message);
    }

});

//Brings you the formated Character passed by Params
//Doest not register A SHIT on the DB (In the future this should be done)
router.get('/IndividualCharacterId/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        const processedCharacter = {
            id: data.id,
            name: data.name,
            status: data.status,
            species: data.species,
            type: data.type,
            gender: data.gender,
            origin: data.origin.name,
            url: data.url,
            location: data.location.name,
            locationImage: data.location.image,
            image: data.image,
            episodes: data.episode
        }
        res.status(202).send(processedCharacter);
    } catch (error){
        console.log(error.message);
        res.status(404).send(error.message);
    }
});

//Filter Characters by: name, status, species, type and gender on just one endPoint
//This will make awesome filters on the search page
//"IndividualCharacterFilter?name=${name}?status=${}?species=${}?type=${}?gender=${}"
router.get('/IndividualCharacterFilter' , async (req, res) => {    
    try {
        let { name, status, species, type, gender } = req.query;
        if(name == undefined){
            name = '';
        };
        if(status == undefined){
            status = '';
        };
        if(species == undefined){
            species = '';
        };
        if(type == undefined){
            type = '';
        };
        if(gender == undefined){
            gender = '';
        };
        const endPoint = `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&species=${species}&type=${type}&gender=${gender}`;
        const findedCharacter = await axios.get(endPoint);
        res.status(202).json(findedCharacter.data.results);
    } catch (error){
        res.status(404).send(error.message);
    }
});

//First 20 locations to render
router.get('/first20Locations', async (req, res) => {
    try {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/location`);
    console.log(data.info);
    res.status(202).json(data.results);
        
    } catch (error){
        res.status(404).send(error.message);
    };
});

//Get location by Id
router.get('/IndividualLocationId/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await axios.get(`https://rickandmortyapi.com/api/location/${id}`);
        res.status(202).json(data);        
    } catch (error){
        res.status(404).send(error.message);
    };
});

//Filter locations by Name, type and dimension
//'/IndividualLocationFilter?name=earth'
//'/IndividualLocationFilter?dimension=unknown'
//'/IndividualLocationFilter?type=planet'
router.get('/IndividualLocationFilter', async (req, res) => {
    try {
        let { name, type, dimension } = req.query;
        console.log(name, type, dimension);
        if (name == undefined) {
            name = '';
        };
        if (type == undefined) {
            type = '';
        };
        if (dimension == undefined) {
            dimension = '';
        };
        const endPoint = `https://rickandmortyapi.com/api/location/?name=${name}&type=${type}&dimension=${dimension}`

        const filteredLocations = await axios.get(endPoint);
        const result = filteredLocations.data.results;
        res.status(200).json(result);

    } catch (error){
        res.status(404).send(error.message);
    };
});

//There is 51 episodes
//Same shit is still pending for episodes
//By same shit I mean get first 20 episodes, get episodes by Name, and filter them by Episode code EJ:(S01E10)
router.get('/first20episodes', async (req, res) => {
    const endPoint = `https://rickandmortyapi.com/api/episode`;
    try {
    const { data } = await axios.get(endPoint);
    res.status(202).json(data.results);
        
    } catch (error){
        console.log(error.message);
        res.status(404).send(error.message);
    };
})

router.get('/IndividualEpisodeId/:id', async (req, res) => {
    try {
    const { id } = req.params;
    const endPoint = `https://rickandmortyapi.com/api/episode/${id}`
    const { data } = await axios.get(endPoint);
    res.status(202).json(data);
    } catch (error){
        console.log(error.message);
        res.status(404).send(error.message);
    };
})
//The ideal shit here is to filter them by season son that will be the goal, elaborate an algorythm that separates this episodes in seasons.


//DATABASE
//Here we brought all the information and relations from the API to the dabase.
router.get('/registerCharacters', registerCharactersDB); //First
router.get('/registerEpisodes', registerEpisodesAndRelations); //Second
router.get('/registerLocations', registerLocationsFromApi); //Third
//PLAYGROUND
router.get('/playground', playground);

module.exports = router;