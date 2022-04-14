var Queue = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var objLength = 0;
  var firstKey = 0;
  // Implement the methods below

  someInstance.enqueue = function (value) {
    // define new key in {storage} as objLength, value = input value, increment objLength
    storage[firstKey + objLength] = value;
    objLength++;
  };

  someInstance.dequeue = function () {
    // create var to store firstKey value
    var firstValue = storage[firstKey];
    // remove first property (key = firstKey)
    delete (storage[firstKey]);
    firstKey++;
    // increment firstKey variable by 1
    if (objLength > 0) {
      objLength -= 1;
    }
    //return var storing firstKey value
    return firstValue;
  };

  someInstance.size = function () {
    return objLength;
  };

  return someInstance;
};
