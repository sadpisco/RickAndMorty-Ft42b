const { Location } = require('../../database');

const getFirstLocations = async function (req, res) {
    try {
        const allLocations = await Location.findAll();
        const sliced = allLocations.slice(0 , 20);
        if (sliced) return res.status(202).json({ status: true, sliced});
     } catch (error) {
        console.log(error, error.message);
        return res.status(500).json({ status: false, message: error.message });
    };
}

module.exports = getFirstLocations;