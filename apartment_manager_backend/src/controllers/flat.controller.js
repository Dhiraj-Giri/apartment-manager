const express = require("express")
const router = express.Router()

const Flats = require("../models/flat.model")


//creating flats

router.post("", async(req,res)=>{
    try{
        const flats = await Flats.create(req.body)
        return res.status(200).send(flats)
    }catch(err){
        return res.status(500).send(err.message)
}
});


//get flats

router.get("",async(req,res)=>{
    try{
        const flats = await Flats.find().lean().exec()
        return res.status(200).send(flats)
    }catch(err){
        return res.status(500).send(err.message)
    }
})


module.exports = router