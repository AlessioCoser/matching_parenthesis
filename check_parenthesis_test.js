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
  it('return false with "one ( parenthesis"', function() {
    expect(parenthesis.check("one ( parenthesis")).to.equal(false);
  });
  it('return true with "two ( parenthesis )"', function() {
    expect(parenthesis.check("two ( parenthesis )")).to.equal(true);
  });
  it('return true with "two [ type ] of ( parenthesis )"', function() {
    expect(parenthesis.check("two [ type ] of ( parenthesis )")).to.equal(true);
  });
  it('return false with "[ crossing ( ] parenthesis )"', function() {
    expect(parenthesis.check("[ crossing ( ] parenthesis )")).to.equal(false);
  });
  it('return true with "[ {three} ( type ) of ] ( parenthesis )"', function() {
    expect(parenthesis.check("[ {three} ( type ) of ] ( parenthesis )")).to.equal(true);
  });
  it('return false with "[ {three} ( type ) of ( ] parenthesis )"', function() {
    expect(parenthesis.check("[ {three} ( type ) of ( ] parenthesis )")).to.equal(false);
  });
});
