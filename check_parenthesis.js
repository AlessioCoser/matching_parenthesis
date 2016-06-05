class Parenthesis {
  constructor(open, close) {
    this._open = open;
    this._close = close;
    this._track = [];
  }

  isOpen(open) {
    return open === this._open;
  }

  isClose(close) {
    return close === this._close;
  }

  last() {
    if(this.isEmpty())
      return -1;

    return this._track[this._track.length-1];
  }

  push(index) {
    this._track.push(index);
  }

  pop() {
    this._track.pop();
  }

  isEmpty() {
    return this._track.length === 0
  }

  clear() {
    this._track = [];
  }
}

class ParenthesisSet {
  constructor(...parenthesis) {
    this.parenthesis = parenthesis;
  }

  getOpenParenthesis(char, index) {
    return this.parenthesis.filter((curr) => {
      return curr.isOpen(char);
    });
  }

  getCloseParenthesis(char) {
    return this.parenthesis.filter((curr) => {
      return curr.isClose(char);
    });
  }

  isGreatestIndex(index) {
    return this.parenthesis.reduce((acc, curr) => {
      if(acc === true) {
        return (curr.last() <= index)
      }
      return acc;
    },true);
  }

  isAllClosed() {
    return this.parenthesis.reduce((acc, curr) => {
      return curr.isEmpty() && acc
    },true);
  }

  clear(){
    this.parenthesis.map((par) => {
      par.clear();
    });
  }

  checkString(string) {
    var chars = string.split('');
    for(let index = 0; index < chars.length; index++) {
      var openPars = this.getOpenParenthesis(chars[index], index);
      if(openPars.length > 0) {
        openPars[0].push(index);
      }
      var closePars = this.getCloseParenthesis(chars[index]);
      if((closePars.length > 0)) {
        if(this.isGreatestIndex(closePars[0].last())) {
          closePars[0].pop();
        }else {
          return false;
        }
      }
    }
    return this.isAllClosed();
  }
}

module.exports = {
  ParenthesisSet,
  Parenthesis
}
