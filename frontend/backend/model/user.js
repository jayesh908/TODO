const mongoose = require("mongoose")
const Userschema  = mongoose.Schema({
        UserName:String,
        email:String,
        password:String,
        state:String,
        city:String,
        address:String        
})
const user = mongoose.model("User",Userschema)
module.exports = user