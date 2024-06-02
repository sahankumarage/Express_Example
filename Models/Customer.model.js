const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },

        mobile: {
            type: Number,
            required: true
        }

    }
)
const Customer = mongoose.model('Customer', CustomerSchema);
module.exports = Customer;