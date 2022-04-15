var Stack = function () {
  // create object that holds methods (shared by all instances of the class) and that will be returned so that the keys inside can be accessed
  var newObject = {};
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

// new stackLength variable set to zero
var stackLength = 0;

stackMethods.push = function(value) {
  storage[stackLength] = value;
  stackLength++;
};

stackMethods.pop = function() {
  var saveValue = storage[stackLength - 1];
  delete storage[stackLength - 1];
  if (stackLength > 0) {
    stackLength--;
  }
  return saveValue;
};

// add size key (value set to stackLength) to stackMethods
stackMethods.size = function() {
  return stackLength;
};

