require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

// const {
//   DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, PORT
// } = process.env;  //Me guardo estas variables en un archivo ".env" para que no se suba a github!

const {DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, PORT}= require("./config.js")



//#############   CONEXION DE SEQUELIZE(ORM) A MI BD   #############//

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/countries`, {
  logging: false, // Para que no me salgan los datos de conexion
  native: false, // Permite que Sequelize sepa que podemos usar pg-native para ~30% más de velocidad
  port: PORT,
});





//#############   VERIFICA SI MI CONEXION SE HIce DE FORMA CORRECTA   #############//

// sequelize.authenticate()
// .then(()=>{
//   console.log("Conexion exitosa")
// })
// .catch( err => {
//   console.log(err)
// })






const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);







//#############   sequelize.models tiene los modelos como propiedades - los relaciono con destructuring  #############//
const { Country, Activity } = sequelize.models;





//#############   RELACION MUCHOS A MUCHOS - CREO LA TABLA INTERMEDIA   #############//

Country.belongsToMany(Activity, { through: 'Country_Activity' }); // Un Country puede tener muchas Activity, y visceversa.
Activity.belongsToMany(Country, { through: 'Country_Activity' });







module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Activity, Country } = require('./db.js'):  en --> routes!
  conn: sequelize,     // para importar la conexión { conn } = require('./db.js'): en --> app.js
};

