const chai = require('chai');
const { expect } = require('chai');
chai.use(require('chai-http'));
const app = require('../server.js');

let token;
let adminToken;
describe('All Routes', () => {
  it('should signup a user with valid details', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'user@gmail.com',
        address: 'kampala',
        password: 'qwerty',
      })
      .then((res) => {
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('data');
        done();
      })
      .catch(err => done(err));
  });
  it('should not signup a user with invalid details', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'user@gmail.com',
        address: 'kampala',
        password: 'qwerty',
      })
      .then((res) => {
        expect(res.status).to.be.equal(422);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        done();
      })
      .catch(err => done(err));
  });
  it('should not signup a user with already exist email', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'user@gmail.com',
        address: 'kampala',
        password: 'qwerty',
      })
      .then((res) => {
        expect(res.status).to.be.equal(422);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        done();
      })
      .catch(err => done(err));
  });
  it('should login user', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send({ email: 'user@gmail.com', password: 'qwerty' })
      .then((res) => {
        expect(res.status).to.be.equal(200);
        expect(res.body).to.have.property('token');
        done();
      })
      .catch(error => done(error));
  });
  it('should not login user with invalid details', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send({ email: 'user@gmail.com', password: 'qwerty' })
      .then((res) => {
        expect(res.status).to.be.equal(422);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        done();
      })
      .catch(error => done(error));
  });
  it('can not log in ghost user', (done) => {
    chai.request(app)
      .post('/api/v1/auth/user/signin')
      .send({ email: 'user@gmail.com', pin: 'qwerty' })
      .then((res) => {
        expect(res.status).to.be.equal(422);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        done();
      })
      .catch(error => done(error));
  });
  it('should signup an Admin  with valid details', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'user@gmail.com',
        address: 'kampala',
        password: 'qwerty',
      })
      .then((res) => {
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('data');
        done();
      })
      .catch(err => done(err));
  });
  it('should get all users successfully', (done) => {
    chai.request(app)
      .get('/api/v1/users')
      .then((res) => {
        expect(res.status).to.be.equal(200);
        expect(res.body).to.have.property('data');
        done();
      })
      .catch(error => done(error));
  });

  it('should verify a user', (done) => {
    chai.request(app)
      .patch('/api/v1/users/user@gmail.com/verify')
      .then((res) => {
        expect(res.status).to.be.equal(202);
        expect(res.body).to.have.property('message');
        done();
      })
      .catch(error => done(error));
  });

  it('should not verify a user successfully', (done) => {
    chai.request(app)
      .patch('/api/v1/users/user@gmail.com/verify')
      .then((res) => {
        expect(res.status).to.be.equal(404);
        expect(res.body).to.have.property('error');
        done();
      })
      .catch(error => done(error));
  });
});