class user {
  constructor(id, firstName, lastName, email, address,
    password, isAdmin, next = null) {
    this.data = new function () {
      this.id = parseInt(id);
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.address = address;
      this.password = password;
      this.status = 'unverified';
      this.isAdmin = isAdmin;
      this.createdOn = Date();
    }();
    this.next = next;
  }
}

class loan {
  constructor(id, user, tenor, amount, interest, paymentInstalment, balance, next = null) {
    this.data = new function () {
      this.id = parseInt(id);
      this.user = user;
      this.createdOn = Date();
      this.status = 'pending';
      this.repaid = true;
      this.tenor = parseInt(tenor);
      this.amount = parseFloat(amount);
      this.interest = parseFloat(interest);
      this.paymentInstalment = parseFloat(paymentInstalment);
      this.balance = parseFloat(balance);
    }();
    this.next = next;
  }
}

class repayments {
  constructor(id, loanId, paidAmount,
    amount, paymentInstallment, next = null) {
    this.data = new function () {
      this.id = parseInt(id, 10);
      this.loanId = parseInt(loanId);
      this.amount = parseFloat(amount);
      this.paymentInstalment = paymentInstallment;
      this.amountPaid = parseInt(paidAmount);
      this.balance = parseFloat(amount - amountPaid);
    }();
    this.next = next;
  }
}
module.exports = {
  user,
  loan,
  repayments,
};
