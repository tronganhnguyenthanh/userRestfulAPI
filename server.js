const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const cors = require("cors")
const PORT = process.env.PORT
const mongoose = require("mongoose")
const routerApi = require("./routes/routes.api")
app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`)
})
mongoose.connect(process.env.DBUser).then(() => {console.log("Database connected successfully")}).catch(() => {
 console.log("Database cannot be found")
})
app.use(cors())
app.use(express.json())
app.use("/api", routerApi)
