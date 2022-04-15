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
// store function to indicate size at size key in queueMethods
queueMethods.size = function() {
  return storageLength;
};
