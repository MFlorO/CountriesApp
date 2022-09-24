const { Router } = require('express');
const router = Router();

const getCountry = require("./getCountry.js")
const activityPost = require("./activityPost")
const countryId = require("./countryId")
const getActivity = require("./getActivity")
const activityDelete = require("./activityDelete")


const activityUpdate = require("./activityUpdate")
const activityTruncate = require("./activityTruncate")






// Obtener por ID
router.use("/countries", countryId);


// Traigo todos los countries
router.use("/countries", getCountry);


// Traigo todas las actividades
router.use("/activities", getActivity);


// Creo la actividad  en la db
router.use("/activities", activityPost);


// Update activity
router.use("/activities", activityUpdate);


// Delete activity
router.use("/activities", activityDelete);

// Truncate activity
router.use("/activities", activityTruncate);



module.exports = router;
