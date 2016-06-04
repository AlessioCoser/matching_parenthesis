module.exports = {
  check
};

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

  push(index) {
    this._track.push(index);
  }

  pop() {
    this._track.pop();
  }

  isEmpty() {
    return this._track.length === 0
  }
}

function check(string) {
  var chars = string.split('');
  var par = new Parenthesis('(', ')');

  for(var index=0; index<chars.length; index++) {
    var char = chars[index];
    if(par.isOpen(char)) {
      par.push(index);
    }
    if(par.isClose(char)) {
      par.pop();
    }
  }

  return par.isEmpty()
}
