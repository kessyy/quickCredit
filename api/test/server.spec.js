const http = require('http');
const { assert } = require('chai');

describe('Express Server', () => {
  it('should return 200', (done) => {
    http.get('http://localhost:3000/home', (res) => {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});
