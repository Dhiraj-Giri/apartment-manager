const mongoose = require("mongoose")

const FlatSchema = new mongoose.Schema({
    Type:{type:String,required:true},
    Block:{type:String,required:true},
    No:{type:Number,required:true},
    Residents:[{type:mongoose.Schema.Types.ObjectId, ref: "residents",required:true}]
},{
    versionKey:false,
    timestamps:true
})




module.exports = mongoose.model("flats",FlatSchema)