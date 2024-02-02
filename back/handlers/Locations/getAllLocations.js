const { Location } = require("../../database");

const getAllLocations = async function (req, res) {
    try {
        const foundLocations = await Location.findAll();
        if (foundLocations) return res.status(202).json({ status: true, foundLocations});
    } catch (error) {
        console.log(error, error.message);
        return res.status(500).json({ status: false, message: error.message });
    };
};

module.exports = getAllLocations;