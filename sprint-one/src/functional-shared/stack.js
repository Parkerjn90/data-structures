var Stack = function () {
  // create object that holds methods (shared by all instances of the class) and that will be returned so that the keys inside can be accessed
  var newObject = {
    stackLength: 0
  };
  // use _.extend to copy methods onto the instance
  _.extend(newObject, stackMethods);
  // return new object
  return newObject;
};

var stackMethods = {};

// use keyword "this"
// do not use keyword "new" or "prototype chains"

// create a new stack
var storage = {};

// // new stackLength variable set to zero
// var stackLength = 0; // 1, 2,
// var newStack2 = Stack();
// newStack2.push('value2');
stackMethods.push = function(value) {
  storage[this.stackLength] = value;

  this.stackLength++;
};

stackMethods.pop = function() {
  var saveValue = storage[this.stackLength - 1]; // stackLength = 2
  delete storage[this.stackLength - 1];
  if (this.stackLength > 0) {
    this.stackLength--;
  }
  return saveValue;
};

// add size key (value set to stackLength) to stackMethods
stackMethods.size = function() {
  return this.stackLength;
};
//construct a newStack via the constructor
//add an item to newStack



