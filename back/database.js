const DB_USER = "postgres";
const DB_PASSWORD = "Arkantro99!";
const DB_NAME = "RYM";
const DB_PORT = 5432;
const DB_HOST = "localhost";

const { Sequelize } = require ('sequelize');
const fs = require ('fs');
const path = require('path');

//Instancia de Sequelize y DB
const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    {
        logging: false,
        native: false
    }
);

const testingConection = function(){
  sequelize.authenticate().then(() => {
    console.log(`Sequelize has successfully been conected to the ${DB_NAME} Database in the PORT ${DB_PORT}.`)
  }).catch((error) => {
    console.log(`Unable to connect to the database: ${error, error.message}`);
  });
};
testingConection();

const basename = path.basename(__filename);
const modelDefiners = [];
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });
modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Character, Location, Episode } = sequelize.models;
Character.belongsToMany(Location, { through: 'character_location', timestamps: false });
Character.belongsToMany(Episode, { through: 'character_episode', timestamps: false });
Episode.belongsToMany(Character, { through: 'character_episode', timestamps: false });
Location.belongsToMany(Character, { through: 'character_location', timestamps: false });
const { character_location, character_episode } = sequelize.models;

module.exports ={
    ...sequelize.models,
    character_location,
    character_episode,
    conn: sequelize,
};