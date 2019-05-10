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
        firstName: 'esther',
        lastName: 'karungi',
        email: 'kather@gmail.com',
        address: 'kampala',
        password: 'asdf',
      })
      .then((res) => {
        token = res.body.token;
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('data');
        expect(res.body).to.have.property('token');
        done();
      })
      .catch(err => done(err));
  });
  it('should not signup a user with invalid details', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        firstName: 'esther',
        lastName: 'esther',
        email: 'kather@gmail.com',
        address: 'kampala',
        password: '123',
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
        firstName: 'esther',
        lastName: 'karungi',
        email: 'kather@gmail.com',
        address: 'kampala',
        password: '123456',
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
      .send({ email: 'kather@gmail.com', password: '123456' })
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
      .send({ email: 'kather@gmail.com', password: '12345' })
      .then((res) => {
        expect(res.status).to.be.equal(422);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        done();
      })
      .catch(error => done(error));
  });
  it('should not login user with non-exist details(email), it should return 422', (done) => {
    chai.request(app)
      .post('/api/v1/auth/user/signin')
      .send({ email: 'kather@gmai.com', pin: '123456' })
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
        firstName: 'esther',
        lastName: 'karungi',
        email: 'admin@admin.com',
        address: 'kampala',
        password: '123456',
      })
      .then((res) => {
        // eslint-disable-next-line prefer-destructuring
        adminToken = res.body.token;
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('data');
        expect(res.body).to.have.property('token');
        done();
      })
      .catch(err => done(err));
  });
  it('should get all users successfully', (done) => {
    chai.request(app)
      .get('/api/v1/users')
      .set('Authorization', adminToken)
      .then((res) => {
        expect(res.status).to.be.equal(200);
        expect(res.body).to.have.property('data');
        done();
      })
      .catch(error => done(error));
  });

  it('should verify a user', (done) => {
    chai.request(app)
      .patch('/api/v1/users/kather@gmail.com/verify')
      .set('Authorization', adminToken)
      .then((res) => {
        expect(res.status).to.be.equal(202);
        expect(res.body).to.have.property('message');
        done();
      })
      .catch(error => done(error));
  });

  it('should not verified a user successfully', (done) => {
    chai.request(app)
      .patch('/api/v1/users/kather@gmai.com/verify')
      .set('Authorization', adminToken)
      .then((res) => {
        expect(res.status).to.be.equal(404);
        expect(res.body).to.have.property('error');
        done();
      })
      .catch(error => done(error));
  });
});