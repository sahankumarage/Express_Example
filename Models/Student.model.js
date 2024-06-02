const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter name"]
        },


        age: {
            type: Number,
            required: [true, "Please enter age"],
            default: 0
        },
        address: {
            type: String,
            required: false,
       
        },
        
    },
    {
        timestamps: true,
    }

);

const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;