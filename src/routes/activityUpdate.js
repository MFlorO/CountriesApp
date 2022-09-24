const { Router } = require('express');
const { Country, Activity } = require("../db.js")

const router = Router();






router.put("/", async function (req, res) {

const { activityId, id, name, difficulty, duration, seassion } = req.body;

console.log(req.body)

try {
    if (activityId || id || name || difficulty || duration || seassion) {

        await Activity.update({
            name: name.toLowerCase(),
            difficulty: difficulty,
            duration: duration,
            seassion: seassion
        },
            {
                where: { id: activityId }  
            }
        );

        // ######### HASTA ACA ME MODIFICA LOS DATOS PERO NO ME AGREGA PAIS ##########

        
        const activity = await Activity.findByPk(activityId);       


        id.map(async c => {

            const countryFind = await Country.findByPk(c.toUpperCase())


            await activity.setCountries([countryFind]) //Me agrega los country seteando los valores  

            // await activity.addCountry([countryFind]) //Me agrega los country pero no me setea si ya hay uno antes      
        })


         // ######### HASTA ACA ME AGREGA PAIS ##########


        res.send("Modified Activity");


    } else {
        res.status(404).send("Not recived data")
    }

  } catch (error) {
    res.send(error);
  }
})






module.exports = router;

