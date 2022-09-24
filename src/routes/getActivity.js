const { Router } = require('express');
const { Activity, Country } = require("../db.js")



const router = Router();




router.get("/", async function (req, res) {

    try {
            const activitiesDB = await Activity.findAll({
                include: {
                    model: Country,
                    attributes: ['id', "name"],
                    through: { attributes: [] }
                },
            })

            res.json(activitiesDB)

    } catch (error) {

        res.status(404).json(error)
    }})





module.exports = router;




