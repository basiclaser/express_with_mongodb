import mongoose from "mongoose"

export default function connectToDatabase() {
    return mongoose.connect(process.env.MONGO_URI)
}