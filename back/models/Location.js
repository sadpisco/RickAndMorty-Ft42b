const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Location', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,

        },
        type: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        dimension: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        url: {
            type: DataTypes.STRING,
            allowNull: true,
        }
        //residents will be a fk in a table of many to many    
    }, {timestamps: false});
    // sequelize.sync({alter: true});
};