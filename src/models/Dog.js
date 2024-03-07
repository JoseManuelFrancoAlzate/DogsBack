const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
    id:{
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
  primaryKey: true,
  unique: true
   },  
   
    image:{
      type: DataTypes.TEXT
    },
    name: {
      type: DataTypes.STRING,
   unique: true
    },
    height:{
      type: DataTypes.JSONB,
    
    },

    weight: {
      type: DataTypes.JSONB,
    
    },

   lifeSpan:{
      type: DataTypes.STRING,
    
    },
 
    createdDb: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }

  },
  {timestamps:false});

};
/*
{

 "image": "https://img.freepik.com/foto-gratis/aislado-feliz-sonriente-perro-fondo-blanco-retrato-4_1562-693.jpg?w=2000",
  "name":"loli",
    "height":{
    "imperial": "9 - 11",
    "metric": "12 - 9" 
    },
    "weight":{
"imperial": "5 - 12",
"metric":"10 - 20"
},

  "lifeSpan":"05 - 07 years",
"temperamentId":"10"



}
*/