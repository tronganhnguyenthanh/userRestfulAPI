const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
  firstName:{
   type:String
  },
  lastName:{
   type:String
  },
  major:{
   type:String
  },
  workExperience:{
   type:Number
  },
  college:{
   type:String
  },
  skills:{
   type:[String] // Array string
  },
  projects:{
   type:[String] // Array string
  }
},{
 collection:"users"
})
module.exports = mongoose.model("userSchema", userSchema)