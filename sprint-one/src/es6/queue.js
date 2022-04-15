class Queue {

  constructor() {
    this.stackLength = 0;
    this.keysMade = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.stackLength + this.keysMade] = value;
    this.stackLength++;
  }

  dequeue() {
    var oldestValue = this.storage[this.keysMade];
    delete this.storage[this.keysMade];
    this.keysMade++;
    if (this.stackLength > 0) {
      this.stackLength--;
    }
    return oldestValue;
  }

  size() {
    return this.stackLength;
  }

}
