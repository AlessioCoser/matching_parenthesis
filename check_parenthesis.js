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
      return false;

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

  _getOpenParenthesis(char, index) {
    var parenthesis = this.parenthesis.filter((curr) => {
      return curr.isOpen(char);
    });

    if(parenthesis.length > 0) {
      return parenthesis[0];
    }
    return false;
  }

  _getCloseParenthesis(char) {
    var parenthesis = this.parenthesis.filter((curr) => {
      return curr.isClose(char);
    });

    if(parenthesis.length > 0) {
      return parenthesis[0];
    }
    return false;
  }

  _isGreatestIndex(index) {
    if(index === false) {
      return false;
    }

    return this.parenthesis.reduce((acc, curr) => {
      if(acc === true) {
        return (curr.last() <= index)
      }
      return acc;
    },true);
  }

  _isAllClosed() {
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
      var open = this._getOpenParenthesis(chars[index], index);
      if(open) {
        open.push(index);
      }

      var close = this._getCloseParenthesis(chars[index]);
      if(close) {
        if(!this._isGreatestIndex(close.last())) {
          return false;
        }
        close.pop();
      }
    }
    return this._isAllClosed();
  }
}

module.exports = {
  ParenthesisSet,
  Parenthesis
}
