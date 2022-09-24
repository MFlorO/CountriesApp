
const { Router } = require('express');
const { Country , Activity } = require("../db.js")
const router = Router();






router.post("/", async function (req, res) {

    const { id, name, difficulty, duration, seassion } = req.body
         //id de country
    

    const newActivity = await Activity.create({
        name: name.toLowerCase(), //El toLowerCase() Lo uso por si el usuario escribe "en mayuscula" o "minuscula"
        difficulty,
        duration,
        seassion
    })



    try {
          
                            // id = ["DNK","CCK","ARG"]
        id.map(async i => { //El id lo mapeo porque puedo agregar varios "country" a una misma "activity"
            
            const countryFind = await Country.findOne({
                where:{
                    id:i.toUpperCase() //El toUpperCase() Lo uso por si escribo "CFK" o "cfk"
                   } 
                }) 

            
            if (countryFind) {
                countryFind.addActivity([newActivity]) //Aca uno 
            }
        })


        res.json({ msg: "Activity created with exit" })

    } catch (error) {
        res.status(400).send(error)
    }
})







module.exports = router;



