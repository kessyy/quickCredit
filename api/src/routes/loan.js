const loanController = require('../../controllers/loan');
const express = require('express');
const router = express.Router();


router.post('/loans', loanController.createLoan,);

  
module.exports = router;