const express = require("express")
const router = express.Router()

const Residents = require("../models/residents.model")

//create resident6s

router.post("",async (req,res)=>{
    try{
        const residents = await Residents.create(req.body)
        return res.status(200).send(residents);
    }catch(err){
        return res.status(500).send(err.message);
    }
})

//get residents

router.get("",async(req,res)=>{
    try{
        const residents = await Residents.find().lean().exec()
        return res.status(200).send(residents);
    }catch(err){
        return res.status(500).send(err.message);
    }
})


//get residents byy id
router.get("/:id", async(req,res)=>{
    try{
        const residents = await Residents.findById(req.params.id).lean().exec()
        return res.status(200).send(residents)
    }catch(err){
        return res.status(500).send(err.message)
    }
})



module.exports = router