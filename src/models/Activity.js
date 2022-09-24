const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.


module.exports = (sequelize) => {
  // Me paro en la instancia de sequelize que cree en db.js cuando hice la conexión y defino el modelo
  
  sequelize.define('activity', {  
    id:{ //Atributo
        type: DataTypes.INTEGER, //Tipo de dato
        autoIncrement: true, //Contrains
        primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty:{
        type:DataTypes.INTEGER,
        validate: {
            min: 1,
            max: 5
        },
        allowNull: true
    },
    duration:{
        type:DataTypes.STRING,
        allowNull: true
    },
    seassion:{
        type: DataTypes.ENUM('Summer', 'Autunm' , 'Winter', 'Spring'),
        allowNull: true
    }

  },{
    timestamps: false
  });
};
