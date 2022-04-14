var Stack = function () {
  var someInstance = {

  };

  // Use an object with numeric keys to store values
  var storage = {};

  var objectLength = 0;

  // Implement the methods below
  someInstance.push = function (value) {
    // add key (current object length) : value to object
    storage[objectLength++] = value;
    // objectLength += 1;
  };

  someInstance.pop = function () {
    // create storage variable and save top (current object's length) key's value
    var poppedValue = storage[objectLength - 1];
    // delete (current object length) key: value pair
    delete storage[objectLength - 1];
    if (objectLength > 0) {
      objectLength -= 1;
    }
    // return the value of the key/value pair that was removed
    return poppedValue;
  };

  someInstance.size = function () {
    return objectLength;
  };

  return someInstance;
};
