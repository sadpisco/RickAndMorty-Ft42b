const { Character } = require('../../database');

const firstCharacters = async function (req, res){
    try {
        const allChars = await Character.findAll();
        let result = allChars.slice(0, 20);
        res.status(202).json(result);
    } catch (error) {
        console.log(error, error.message);
        return res.status(500).json({ status: false, message: error.message});
    };
};

module.exports = firstCharacters;