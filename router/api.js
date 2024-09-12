const router =  require("express").Router()
const   controler = require("../controller/user")



router.get("/" ,controler.homepagecontroler)












module.exports =router