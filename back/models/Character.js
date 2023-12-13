const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Character', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
          },
          name:{
            type: DataTypes.STRING,
            allowNull: true,

          },
          status:{
            type: DataTypes.STRING,
            allowNull: true,

          },
          species:{
            type: DataTypes.STRING,
            allowNull: true,

          },
          type:{
            type: DataTypes.STRING,
            allowNull: true,

          },
          gender: {
            type: DataTypes.STRING,
            allowNull: true,

          },
          origin: {
            type: DataTypes.STRING,
            allowNull: true,

          },
          image:{
            type: DataTypes.STRING,
            allowNull: true,

          },
          url: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          location:{
            type: DataTypes.STRING,
            allowNull: true,
          },
          locationUrl: {
            type: DataTypes.STRING,
            allowNull: true,
          }
          //location will be a fk with the table of locations
          //episode will be a fk with the table of locations
    }, {timestamps: false});
    // sequelize.sync({alter: true});
};