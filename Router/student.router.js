const express = require('express');
const router = express.Router();
const {getStudent} = require('../Controller/student.controller.js');

router.get('/getStudent', getStudent);

module.exports = router;


