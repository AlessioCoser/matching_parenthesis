var chai = require('chai');
var expect = chai.expect;
var parenthesis = require("./check_parenthesis");

describe('Check parenthesis', function() {
  it('return true with empty string', function() {
    expect(parenthesis.check("")).to.equal(true);
  });
});
