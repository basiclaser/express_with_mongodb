import "dotenv/config"

import express from "express"
import connectToDatabase from "./src/database"
import studentsRouter from "./src/student/router"
import cors from "cors"

const PORT = process.env.PORT || 3000
const api = express()
api.use(cors())
api.use(express.json())


connectToDatabase().then(() => {
    api.use("/students", studentsRouter)
    api.listen(PORT, ()=>console.log(`API is listening on http://localhost:${PORT}`))
})
