class Stack {

  constructor() {
    this.stackLength = 0;
    this.storage = {};
  }

  push(value) {
    this.storage[this.stackLength++] = value;
  }

  pop() {
    var newestValue = this.storage[this.stackLength - 1];
    delete this.storage[this.stackLength - 1];
    if (this.stackLength > 0) {
      this.stackLength --;
    }
    return newestValue;
  }

  size() {
    return this.stackLength;
  }

}