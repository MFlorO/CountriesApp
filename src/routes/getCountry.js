const { Router } = require('express');
const { Country, Activity } = require("../db.js")
const axios = require('axios');
const { Op } = require('sequelize');

const router = Router();




async function crearRegistro() {

    const allCountries = await axios.get(`https://restcountries.com/v3/all`)

    const countriesMap = await allCountries.data.map(c => {
        return {
            id: c.cca3,
            name: c.name.common,
            imageFlag: c.flags,
            continent: c.continents,
            capital: c.capital ? c.capital : ["Not have capital"],
            subregion: c.subregion ? c.subregion : "",
            area: c.area,
            population: c.population
        }
    })

    return countriesMap
}






router.get("/", async function (req, res) {

    const { name } = req.query;


    const dbLength = await Country.count();  //".count()" --> Me dice si hay datos en esa tabla "Country"

    if (!dbLength) {  
        const countries = await crearRegistro() //LLamo a la funcion
        // console.log(countries)
        await Country.bulkCreate(countries); // ACA creo múltiples registros en la tabla POR PRIMERA VEZ EN BD
    }




    try {

        if (name) {

            const country = await Country.findAll({
                include: {
                    model: Activity,
                    attributes: ['id', "name", "difficulty", "duration", "seassion"],
                    through: { attributes: [] }
                },
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`    //Argentina -> rge ,  
                    }
                }
            })

            if (country.length > 0) {

                res.json(country)

            } else {

                res.json({ msg: "There is not country with that name" })
            }


        } else {

            const countryDB = await Country.findAll({
                include: {
                    model: Activity,
                    attributes: ['id', "name", "difficulty", "duration", "seassion"],
                    through: { attributes: [] }
                }
            })

            res.json(countryDB)
        }

    } catch (error) {
        res.status(404).json(error)
        res.send("Estamos en el back")
    }

})


module.exports = router;




