const usercontroller = require("../controller/usercontroller")
const route = require("express").Router()

route.post("/setuser",usercontroller.setuser)

module.exports = route