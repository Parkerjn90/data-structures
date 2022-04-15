var Queue = function() {
  var queueObject = {};
  _.extend(queueObject, queueMethods);
  return queueObject;
};

var queueMethods = {};
// create storage object
var storage = {};
// create storageLength counter
var storageLength = 0;
// create counter variable to store number of Keys made
var keysMade = 0;
// add key (enqueue) to queueMethods, value = function with input parameter = value
queueMethods.enqueue = function(value) {
  // add key (current storageLength + keysMade) to storage, value = input value, increment storageLength by 1
  storage[storageLength + keysMade] = value;
  storageLength++;
};

// add key (dequeue) to queueMethods, value = function
queueMethods.dequeue = function() {
  // save value of key meant to be removed (key = storage length + keysMade)
  var saveValue = storage[keysMade];
  // remove property at storage(length + keysMade)
  delete (storage[keysMade]);
  // increase keysMade +1
  keysMade++;
  // if storageLength > 0,
  if (storageLength > 0) {
    // decrease storage Length - 1
    storageLength--;
  }
  // return saved value
  return saveValue;
};

// store function to indicate size at size key in queueMethods
queueMethods.size = function() {
  return storageLength;
};
