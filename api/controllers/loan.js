const { newUser, Loan } = require('../helpers/helper');
const {Token}  = require('./validate');
const validateLoan = require('./validate')

let id = 1;
let data;
const createLoan = (req, res) => {
 const { error } = validateLoan(req.body);
 if (error) {
   return res.status(422).json({status: 422, message: error.details[0].message,
   });
 }
 
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

// class loanController {
// //create loan
//     static createLoan(req, res) {
//       const {id, user, amount, tenor, interest, paymentInstalment
//       } = req.body;
//       const loanuser = newUser.loanuser(user);
//       if (loanuser) {
//         res.status(422).json({ status: 422, error: 'You already applied for a loan' });
//         return;
//       }

//   const applyLoan = [id, user, amount, tenor, interest, paymentInstalment 
//  ];
//   Loan.create(...applyLoan);
//   return res.status(201).json({
//     status: 201,
//     data: {
//       message: 'request received, wait for verification',
//       loanId: applyLoan.id,
//       email:applyLoan.user,
//       amount: applyLoan.amount,
//       tenor: applyLoan.tenor,
//       interest: applyLoan.interest,
//       paymentInstalment: applyLoan.paymentInstalment,
//     },
//   });
// }

// static getAllLoans(req, res) {
//   const { status, repaid } = req.query;
//   if (status && repaid) {
//     const response = Loan.findQuery(status, JSON.parse(repaid));
//     return res.status(200).json({
//       status: 200,
//       data: response,
//     });
//   }

//   return res.status(200).json({
//     status: 200,
//     data: Loan.all(),
//   });
// }

// static getOneLoan(req, res) {
//   const loanRecord = Loan.find(parseInt(req.params.id, 10));
//   if (!loanRecord) {
//     return res.status(404).json({
//       status: 404,
//       error: 'loan record not found',
//     });
//   }

//   return res.status(200).json({
//     status: 200,
//     data: loanRecord,
//   });
// }

// static updateLoan(req, res) {
//   const loanRecord = Loan.find(parseInt(req.params.id, 10));
//   if (!loanRecord) {
//     return res.status(404).json({
//       status: 404,
//       error: 'Loan record not found',
//     });
//   }

//   const data = req.body;
//   loanRecord.update(data);
//   return res.status(201).json({
//     status: 201,
//     data: {
//       loanId: loanRecord.id,
//       loanAmount: loanRecord.amount,
//       tenor: loanRecord.tenor,
//       status: loanRecord.status,
//       paymentInstalment: loanRecord.paymentInstalment,
//       interest: loanRecord.interest,
//     },
//   });
// }
// }

// module.exports = loanController;