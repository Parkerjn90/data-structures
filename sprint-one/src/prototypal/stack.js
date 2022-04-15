var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.stackLength = 0;
  newStack.storage = {};
  return newStack;
};

var stackMethods = {};

// add key (push) to stackMethods, value = function(with an input value)
stackMethods.push = function(value) {
  // add inputvalue at a key(the stackLength in the current object) to storage(in the current object)
  this.storage[this.stackLength] = value;
  // increase the stackLength(in current object)
  this.stackLength++;
};

// add key (pop) to stackMethods, value = function
stackMethods.pop = function() {
  // save most recent key's value
  var currentValue = this.storage[this.stackLength - 1];
  // remove currentValue and key
  delete this.storage[this.stackLength - 1];
  // if stackLength(current obj) is > 0,
  if (this.stackLength > 0) {
    // increase stackLength
    this.stackLength--;
  }
  return currentValue;
};

stackMethods.size = function() {
  return this.stackLength;
};

var newObject = Stack();
