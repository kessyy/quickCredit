const { user, loan, repayments } = require('../src/models/db')

class LinkedList {
  construct() {
    this.head = null;
  }
addToUser() {
    const newNode = new user(this.head);
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }
addToLoan() {
    const newNode = new loan(this.head);
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }
addToRepayments() {
    const newNode = new repayments(this.head);
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }
// locating items to use for endpoints
find(id) {
  let thisNode = this.head;
  while (thisNode) {
    if (thisNode.data.id === id) return thisNode.data;
    thisNode = thisNode.next;
  }
  return thisNode;
}
//locate repaid loans
paid() {
  let thisNode = this.head;
  while (thisNode){
    if (thisNode.data.repaid === true) return thisNode.data;
    thisNode = thisNode.next;
  }
  return thisNode;
}
//locate not fully repaid loans
unpaid(){
  let thisNode = this.head;
  while (thisNode){
    if (thisNode.data.repaid === false) return thisNode.data;
    thisNode = thisNode.next;
  }
  return thisNode;
}
checkCreds() {
  let thisNode = this.head;
  if (args.length === 2) {
  while (thisNode) {
    if (thisNode.data.email === [0] && thisNode.data.password === [1]) {
      return { bool: true, node: thisNode.data };
    }
    node = thisNode.next;
    }
    return { bool: false, node: null };
    }
  while (thisNode) {
  if (thisNode.data.id === [0]) return { bool: true, node: thisNode.data };
    node = thisNode.next;
  }
  return { bool: false, node: null };
  }

Email(email) {
  let thisNode = this.head;
  while (thisNode) {
  if (thisNode.data.email === email) return  thisNode.data ;
  thisNode = thisnode.next;
  }
  return false;
}
loanuser(user) {
  let thisNode = this.head;
  while (thisNode){ 
    if(thisNode.data.user === user) return thisNode.data;
    thisNode = thisnode.next;
  }
  return false;
}


}
//data is stored in a new linked list
const newUser = new LinkedList();
const Loan = new LinkedList();
const newApplication = new LinkedList();
const newRepayment = new LinkedList();
module.exports = {
  LinkedList,
  newUser,
  Loan,
  newApplication,
  newRepayment
};