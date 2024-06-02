const Customer = require('../Models/Customer.model.js');

const createCustomer = async (req, res) => {
    try{
        const student = await Customer.create(req.body);
        res.status(200).json("Created SuccessFully");
    }catch(error){
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createCustomer
}