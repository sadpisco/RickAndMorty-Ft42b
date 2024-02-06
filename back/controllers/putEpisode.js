const { Episode } = require('../database');

const putEpisode = async(req, res) => {
    try {
        const { id, description, episodeImg } = req.body;
        const updatedEpisode = await Episode.update({description, episodeImg}, {where: {id}})
        if(updatedEpisode) return res.status(202).json(`Episode ID ${id} has succesfully been updated.`);

    } catch (error) {
        res.status(500).send(error, error.message);
    };
};

module.exports = putEpisode;