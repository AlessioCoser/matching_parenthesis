var chai = require('chai');
var expect = chai.expect;
var Parenthesis = require("./check_parenthesis").Parenthesis;
var ParentesisSet = require("./check_parenthesis").ParenthesisSet;

const PARENTHESIS_SET = new ParentesisSet(
  new Parenthesis('(', ')'),
  new Parenthesis('[', ']'),
  new Parenthesis('{', '}')
);

describe('Check parenthesis', () => {
  beforeEach(() => {
    PARENTHESIS_SET.clear();
  });

  it('return true with empty string', () => {
    expect(PARENTHESIS_SET.checkString("")).to.equal(true);
  });
  it('return true with "no parenthesis"', () => {
    expect(PARENTHESIS_SET.checkString("no parenthesis")).to.equal(true);
  });
  it('return false with "one ( parenthesis"', () => {
    expect(PARENTHESIS_SET.checkString("one ( parenthesis")).to.equal(false);
  });
  it('return true with "two ( parenthesis )"', () => {
    expect(PARENTHESIS_SET.checkString("two ( parenthesis )")).to.equal(true);
  });
  it('return true with "two [ type ] of ( parenthesis )"', () => {
    expect(PARENTHESIS_SET.checkString("two [ type ] of ( parenthesis )")).to.equal(true);
  });
  it('return false with "[ crossing ( ] parenthesis )"', () => {
    expect(PARENTHESIS_SET.checkString("[ crossing ( ] parenthesis )")).to.equal(false);
  });
  it('return true with "[ {three} ( type ) of ] ( parenthesis )"', () => {
    expect(PARENTHESIS_SET.checkString("[ {three} ( type ) of ] ( parenthesis )")).to.equal(true);
  });
  it('return false with "[ {three} ( type ) of ( ] parenthesis )"', () => {
    expect(PARENTHESIS_SET.checkString("[ {three} ( type ) of ( ] parenthesis )")).to.equal(false);
  });
});
