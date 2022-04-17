const mongoose = require("mongoose")

module.exports = () =>{
    return mongoose.connect(`mongodb+srv://dhirajGiri:1017@cluster0.b26s5.mongodb.net/apartmentDetails?retryWrites=true&w=majority`)
};