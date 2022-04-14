var Stack = function() {
  var someInstance = {

  };

  // Use an object with numeric keys to store values
  var storage = {

  };

  var objectLength = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    objectLength += 1;
  };

  someInstance.pop = function() {
    if (objectLength > 0) {
      objectLength -= 1;
    }

  };

  someInstance.size = function() {
    return objectLength;
  };

  return someInstance;
};
