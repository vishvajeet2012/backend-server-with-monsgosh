const express= require("express")
const mongoose =  require("mongoose")
const app = express()
const apiRouter =require("./router/api")

mongoose.connect("mongodb://127.0.0.1:27017/db_express_react").then(()=>{
    console.log("successfully database conected")
}).catch((error)=>{
    console.log(`error occured in this ${error}` )
})

app.use("/api",apiRouter)
let port =7000
app.listen(port,()=>{
    console.log(`running on this server ${port}`)
})