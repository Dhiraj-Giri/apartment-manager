const express = require("express");
const connect = require("./config/db")
const {register,login} = require("./controllers/auth.controller")
const Residents = require("./controllers/residents.contrioller")
const Flats = require("./controllers/flat.controller")

const app = express()
app.use(express.json())



app.post("/register",register)
app.post("/login",login)
app.use("/residents",Residents)
app.use("/flats",Flats)

app.listen(1017, async()=>{
    try{
        await connect()
        console.log("Listening on port 1017")
    }
    catch(err){
        console.error(err.message)
    }
})