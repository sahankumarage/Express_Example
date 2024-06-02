const express = require('express');
const router = express.Router();
const {createCustomer} = require('../Controller/Customer.controller');


router.post('/createCustomer', createCustomer );

module.exports = router;