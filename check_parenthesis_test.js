var chai = require('chai');
var expect = chai.expect;
var parenthesis = require("./check_parenthesis");

describe('Check parenthesis', function() {
  it('return true with empty string', function() {
    expect(parenthesis.check("")).to.equal(true);
  });
  it('return true with "no parenthesis"', function() {
    expect(parenthesis.check("no parenthesis")).to.equal(true);
  });
});
