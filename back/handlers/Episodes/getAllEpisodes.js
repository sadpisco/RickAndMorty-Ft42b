const { Episode } = require("../../database");

const getAllEpisodes = async function (req, res) {
    try {
        const foundEpisodes = await Episode.findAll();
        if (foundEpisodes) return res.status(202).json({ status: true, foundEpisodes });

    } catch (error) {
        console.log (error, error.message);
        return res.status(500).json({ status: false, message: error.message});
    };
};

module.exports = getAllEpisodes;

