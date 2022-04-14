var Queue = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var objLength = 0;

  // Implement the methods below

  someInstance.enqueue = function (value) {
    objLength += 1;
  };

  someInstance.dequeue = function () {
    if (objLength > 0) {
      objLength -= 1;
    }
  };

  someInstance.size = function () {
    return objLength;
  };

  return someInstance;
};
