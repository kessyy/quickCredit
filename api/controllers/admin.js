const { newUser, Loan } = require('../helpers/helper');

let id;

const loanid = (req, res) => {
    id = parseInt(req.params.id, 8);
    const specificLoan = Loan.find(id);
    if (specificLoan === null) res.status(404).send({ status: 404, message: 'loan not found'});
    else res.status(200).send({ status:200, message: specificLoan});
};
//admin can view payed loans
const paid = (req, res) => {
    const { paid } = req.params;
    const Paid = Loan.paid();
    if (!Paid) res.status(404).json({status: 404, message: 'no data found'});
    else res.status(201)/json({status:201, data: paid});
}
//admin can view current not fully repaid loans
const halfPaid = (req, res) => {
    const { halfpaid } = req.params;
    const notPaid = Loan.unpaid();
    if (!notPaid) res.status(404).json({status: 404, error: 'no data found'});
    else res.status(201)/json({status:201, data: halfpaid});
}

// admin veiw all users
const users = (req, res) => {
  if (Object.keys(newUser).length > 0) {
    res.status(200).json({ status: 200, data: [newUser] });
  } else {
    res.status(404).send({ status: 404, message: 'data not found' });
  }
};
//admin can view all loans
const loans = (req, res) => {
if (Object.keys(Loan).length > 0) {
    res.status(200).json({ status: 200, data: [Loan]});
}else {
    res.status(404).json({status:404, message:'data not found'})
}
}
module.exports = {
  loans,
  paid,
  halfPaid,
  loanid,
  users,
};