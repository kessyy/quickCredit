const loanController = require('../../controllers/loan');
//const createLoan = require('../../controllers/loan')
const express = require('express');
const router = express.Router();
//const validateLoan = require('../../controllers/validate')

router.post('/loans', loanController.createLoan,) //validateLoan);
// router.get('/loans', loanController.getAllLoans);
// router.get('/loans/:id', loanController.getOneLoan);
// router.patch('/loans/:id', loanController.updateLoan);
  
module.exports = router;