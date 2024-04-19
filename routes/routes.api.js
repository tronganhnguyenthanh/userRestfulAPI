const userController = require("../controllers/user.controller")
const express = require("express")
const routerApi = express.Router()
routerApi.post("/new/user", userController.addNewUser)
routerApi.get("/user/list", userController.getUserList)
routerApi.get("/user/:id", userController.getUserById)
routerApi.put("/user/update/:id", userController.updateUser)
routerApi.delete("/user/delete/:id", userController.deleteUserById)
module.exports = routerApi