var Queue = function() {
  var newStack = Object.create(queueMethods);
  newStack.stackLength = 0;
  newStack.keysMade = 0;
  newStack.storage = {};
  return newStack;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  // add value to storage(current obj), key = stackLength(current obj) AND
  this.storage[this.stackLength + this.keysMade] = value;
  //increase stackLength
  this.stackLength++;
};

queueMethods.dequeue = function() {
  // save value of oldest added property
  var recentValue = this.storage[this.keysMade];
  // remove oldest added property
  delete this.storage[this.keysMade];
  // increase keys made +1
  this.keysMade++;
  //as long as stackLength is above 0
  if (this.stackLength > 0) {
    // decrease stackLength
    this.stackLength--;
  }
  return recentValue;
};

queueMethods.size = function() {
  return this.stackLength;
};
