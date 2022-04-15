var Queue = function() {
  var queueObject = {
    storageLength: 0,
    keysMade: 0
  };
  _.extend(queueObject, queueMethods);
  return queueObject;
};

var queueMethods = {};
// create storage object
var storage = {};
// create storageLength counter
// var storageLength = 0;
// create counter variable to store number of Keys made
// var keysMade = 0;
// add key (enqueue) to queueMethods, value = function with input parameter = value
queueMethods.enqueue = function(value) {
  // add key (current storageLength + keysMade) to storage, value = input value, increment storageLength by 1
  storage[this.storageLength + this.keysMade] = value;
  this.storageLength++;
};

// add key (dequeue) to queueMethods, value = function
queueMethods.dequeue = function() {
  // save value of key meant to be removed (key = storage length + keysMade)
  var saveValue = storage[this.keysMade];
  // remove property at storage(length + keysMade)
  delete (storage[this.keysMade]);
  // increase keysMade +1
  this.keysMade++;
  // if storageLength > 0,
  if (this.storageLength > 0) {
    // decrease storage Length - 1
    this.storageLength -= 1;
  }
  // return saved value
  return saveValue;
};

// store function to indicate size at size key in queueMethods
queueMethods.size = function() {
  return this.storageLength;
};
