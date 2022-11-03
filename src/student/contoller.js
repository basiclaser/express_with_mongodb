import Student from "./model"

export async function postStudent(req,res) {
    try {
        const newStudent = await Student.create(req.body)
        res.json(newStudent)
    } catch(e) {
        res.send(e)
    }
}
export async function getStudent(req,res) {
    try {
        const allTheStudents = await Student.find()
        res.json(allTheStudents)
    } catch(e) {
        res.send(e)
    }
}

export async function putStudent(req,res) {
    const {id} = req.params
    try {
        const foundStudent = await Student.findById(id)
        if(!foundStudent) return res.status(404).send("sorry, we couldn't find that user. Are you logged in?")
        const updatedStudent = await Student.findByIdAndUpdate(id, req.body, {new: true})
        res.json(updatedStudent)
    } catch(e) {
        res.send(e)
    }
}