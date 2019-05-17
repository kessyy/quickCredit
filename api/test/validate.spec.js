const { expect } = require('chai');
const { hashPassword, comparePassword, validateLoan, validateLogin, validateSignUp,
} = require('../controllers/validate');

const info = {
  email: 'user@gmail,com',
  password: 'qwerty',
};

const loan = {
  usermail: 'user@gmail.com',
  tenor: 5,
  amount: 2000000,
};

const user = {
  firstname: 'Jane',
  lastname: 'Doe',
  email: 'user@gmail.com',
  address: 'uganda',
  password: 'qwerty',
};

describe('validation', () => {
  let result;
  it('validate sign up', () => {
    result = validateSignUp(user);
    expect(result).to.be.a('object');
  });
  it('validate login', () => {
    result = validateLogin(info);
    expect(result).to.be.a('object');
  });

  it('validate loan', () => {
    result = validateLoan({ status: 'approved' });
    expect(result).to.be.a('object');
  });
});
describe('password encryption', () => {
  let result;
  it('return hashed password', () => {
    result = hashPassword('123456');
    expect(result).to.be.a('string');
  });
  it('return true if password matches hashed', () => {
    result = comparePassword(`${result}`, '123456');
    expect(result).to.be.equal(true);
  });
  it('return false if password does not matches hashed', () => {
    result = comparePassword(`${result}`, '12345');
    expect(result).to.be.equal(false);
  });
});
