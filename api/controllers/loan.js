const { newUser, Loan } = require('../helpers/helper');
const {Token}  = require('./validate');
const {validateLoan} = require('./validate')
//validate loan
let id = 1;
let data;
const createLoan = (req, res) => {
 const { error } = validateLoan(req.body);
 if (error) {
   return res.status(422).json({status: 422, message: error.details[0].message,
   });
 }
//apply for loan 
const { id, user, email, amount, address, paymentInstalment,} = req.body;

const checkEmail = newUser.Email(email);
 if (thisNode.data) {
   res.status(422).json({ status: 422, error: 'email already exists' });
   return;
 }
const userInfo = [id, user, amount, email,
 address, paymentInstalment];
 id += 1;
 newUser.user(...userInfo);
 const token = Token(newUser.head.data.email);
 data = newUser.head.data;
 res.status(201).json({
 status: 201, Created: 'true', token, data,
 });
 return;
};



module.exports = {
    createLoan
}
