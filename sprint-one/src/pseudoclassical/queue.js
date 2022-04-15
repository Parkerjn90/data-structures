var Queue = function() {
  this.stackLength = 0;
  this.keysMade = 0;
  this.storage = {};
};

//co = current object

Queue.prototype.enqueue = function(value) {
  // add inputvalue to storage(co), key = storage(co) + keysmade(co)
  this.storage[this.stackLength + this.keysMade] = value;
  // increase storage(co)
  this.stackLength++;
};

Queue.prototype.dequeue = function() {
  // save oldest value in stack
  var oldestKey = this.storage[this.keysMade];
  // remove oldest property in stack
  delete this.storage[this.keysMade];
  // increase keys made +1
  this.keysMade++;
  // if current stack Length > 0
  if (this.stackLength > 0) {
    // decrease stack length
    this.stackLength--;
  }
  // return oldest value in stack
  return oldestKey;
};

Queue.prototype.size = function() {
  return this.stackLength;
};


