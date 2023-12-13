const axios = require('axios');

const getCharById = function(res, id){
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response)=>{
        const {name, image, gender, species, status, origin} = response.data;
        res
        .writeHead(200,{"Content-type": "aplication/json"})
        .end(JSON.stringify({name, image, gender, species, status, origin}))
        
    }).catch((error)=>{
        res.writeHead(500, {"Content-Type0":"text/plain"}).end(error.message);
    })
}

module.exports = getCharById;