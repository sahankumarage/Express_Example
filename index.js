const express = require('express');
const  mongoose  = require('mongoose');
const StudentRoutes = require('./Router/student.router.js');
const CustomerRoutes = require('./Router/Customer.router.js');
const app = express();

// Middleware to parse JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/student', StudentRoutes)
app.use('/customer',CustomerRoutes);


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});


mongoose.connect("mongodb+srv://Sahan:Sahan1234@cluster0.sonplsv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=> {
    console.log("Connected to DataBase");
})
.catch(err => {
    console.log("Can't connect to Database");
})

