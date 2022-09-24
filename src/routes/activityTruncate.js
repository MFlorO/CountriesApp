
const { Router } = require('express');
const { Activity } = require("../db.js")
const router = Router();




//######### TRUNCATE #########
//Elimina todos los registros en una vez


router.delete("/", async function (req, res) {

    try{
        await Activity.destroy({
            truncate: true, // La tabla «Country_Activity» hace referencia a «activities»
            cascade: true  // Trunque la tabla «Country_Activity» al mismo tiempo, o utilice TRUNCATE ... CASCADE, no se puede truncar una tabla referida en una llave foránea
        }
      );

      res.send("Activities truncadas");
    }
    catch(error){
        res.send(error);
    }
})


// router.delete("/", async function (req, res) {

//     try{
//         await Activity.truncate({
//             cascade: true 
//         }
//       );

//       res.send("Activities truncadas");
//     }
//     catch(error){
//         res.send(error);
//     }
// })





module.exports = router;
