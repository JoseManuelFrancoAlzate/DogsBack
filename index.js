//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Temperaments } = require('./src/db.js');
const PORT = 3001
const axios = require("axios") 


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(PORT, async() => {
    const dbTemperaments= Temperaments.findAll(); 

    if(!dbTemperaments.length){
      const urlApi = await axios.get('https://api.thedogapi.com/v1/breeds');
const infoApi = await urlApi.data.map((raza)=>{
  return{
    temperament: raza.temperament ? raza.temperament.split(',')[0].toString() : "Temperament"
  }
});
for(let i = 0; i < infoApi.length; i++){
  await Temperaments.findOrCreate({
  
    where:{name:infoApi[i].temperament},

  }) 
}

console.log('base de datos actualizada')

    }
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
}).catch(error => console.error(error));


//Api Key:
//live_ 7Cqn2dVVSrASKD6vVBqyWjD99HOVij yNrjqVIwvNDxbBSI0QYe80h68DnIrM wmNc 