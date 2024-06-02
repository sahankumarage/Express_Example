const Student = require('../Models/Student.model.js')


const getStudent = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const postStudent = async (req, res) => {
    try{
        const student = await Student.create(req.body);
        res.status(200).json("Created a student");
    }catch(error){
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

const studentGetById = async (req, res) => {
    try {
        const { id } = req.params;
        const students = await Student.findById(id);
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



module.exports = {
    getStudent,
    postStudent,
    studentGetById
}