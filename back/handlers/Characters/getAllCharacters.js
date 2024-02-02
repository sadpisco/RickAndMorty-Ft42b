const { Character } = require("../../database");

const getAllCharacters = async function (req, res) {
    try {
        const foundCharacters = await Character.findAll();
        if (foundCharacters) return res.status(202).json({ status: true, foundCharacters });
    } catch (error) {
        console.log('controller', error.message);
        return res.status(500).send({ status: false , message: error.message});
    };
};

module.exports = getAllCharacters;