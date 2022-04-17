const mongoose = require("mongoose")


const ResidentsSchema = new mongoose.Schema({
    Name:{type:String, reuired: true},
    Gender:{type:String,required:true},
    Age:{type:Number,required:true}
})


module.exports = mongoose.model("residents",ResidentsSchema)


