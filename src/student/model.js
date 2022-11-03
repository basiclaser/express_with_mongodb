import {Schema, model} from "mongoose"

const studentSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String
})
//               mongoose will create a "students" collection automatically from 
//               this following line
const Student = model("student", studentSchema)

export default Student