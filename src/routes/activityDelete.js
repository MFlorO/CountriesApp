
const { Router } = require('express');
const { Activity } = require("../db.js")


const router = Router();




//######### DESTROY #########
//Elimina los registros uno por uno que cumplan con la condicion de "where"



router.delete("/:id", async function (req, res) {

    const { id } = req.params;

    try {
        if (id) {

            await Activity.destroy({
                    where: { id: id }
                }
            );

            res.json({msg: "Activity deleted with exit"});

        } else {
            res.status(404).json({msg:"Not recived id"})
        }
    } catch (error) {
    res.send({msg:"The data cannot be deleted"});
 }
})







module.exports = router;
