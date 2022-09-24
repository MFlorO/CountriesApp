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

require('dotenv').config();
const server = require('./src/app.js');
const { conn } = require('./src/db.js'); // "conn" tiene todos los modelos juntos, ya que es la instancia de sequelize.models renombrado
const {PORT}= require("./src/config.js")



//#############    SINCRONIZO LOS MODELOS. En desarrollo usamos "force:true"   #############//
conn.sync({ force: true }).then(() => {
  server.listen(`${PORT || 3001}`, () => {
    console.log(`%s listening at ${PORT || 3001}`); // eslint-disable-line no-console
  });
});
