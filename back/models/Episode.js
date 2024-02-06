const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Episode', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,

        },
        airDate: {
            //HOW TO SAVE THE INFO IN THE DATE FORMAT
            type: DataTypes.DATE,

        },
        season:{
            type: DataTypes.INTEGER,

        },
        number: {
            type: DataTypes.INTEGER,

        },
        description: {
            type: DataTypes.STRING,
        },
        episodeImg: {
            type: DataTypes.STRING,
        }
        //Relaciones con tabla characters
    }, {timestamps: false})
    // sequelize.sync({alter: true});
};