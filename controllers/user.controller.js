const userModel = require("../models/user.model")
// Add new user
const addNewUser = async (req, res) => {
  try{
   let newUser = await userModel({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    major:req.body.major,
    workExperience:req.body.workExperience,
    college:req.body.college,
    skills:[...req.body.skills],
    projects:[...req.body.projects]
   })
   newUser.save()
   res.json({message:"User added successfully"})
  }catch(error){
    res.status(400).json({message:error})
  }
}
// Get list users
const getUserList = async (req, res) => {
  try{
    let userList = await userModel.find()
    res.json(userList)
  }catch(error){
    res.status(400).json({message:error})
  }
}
// Get user by id
const getUserById = async (req, res) => {
  try{
    let _id = req.params.id
    let getUserId = await userModel.findById(_id)
    res.json(getUserId) 
  }catch (error){
    res.status(400).json({message:error}) 
  }
}
// Update user
const updateUser = async (req, res) => {
  try{
    let _id = req.params.id
    let update = req.body
    await userModel.findByIdAndUpdate(_id, update, {new:true})
    res.json({message:"User updated successfully"}) 
  }catch (error){
    res.status(400).json({message:error}) 
  }
}
const deleteUserById = async (req, res) => {
  try{
   let _id = req.params.id 
   await userModel.findByIdAndDelete(_id)
   res.json({message:"User deleted successfully"}) 
  }catch(error){
    res.status(400).json({message:error})
  }
}

module.exports = {
 addNewUser,
 getUserList,
 getUserById,
 updateUser,
 deleteUserById
}