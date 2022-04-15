var Stack = function() {
  this.stackLength = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  // assign value to current object, key = current length AND increase current length +1
  this.storage[this.stackLength++] = value;
};

Stack.prototype.pop = function() {
  // save most recent value (key = current obj length - 1)
  var recentValue = this.storage[this.stackLength - 1];
  // remove most recent property
  delete this.storage[this.stackLength - 1];
  // as long as length is > 0
  if (this.stackLength > 0) {
    // decrease length
    this.stackLength--;
  }
  return recentValue;
};

Stack.prototype.size = function() {
  return this.stackLength;
};

// var newStack = new Stack();
