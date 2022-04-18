var BinarySearchTree = function (value) {
  // link newTree with treeMethods
  var newTree = Object.create(treeMethods);
  // add value property
  this.value = value;
  // add left node (empty right now)
  this.left = null;
  // add right node (empty right now)
  this.right = null;
  // return newTree
  return newTree;
};

var treeMethods = {};

treeMethods.insert = function (value) {

};

treeMethods.contains = function (value) {

};

treeMethods.depthFirstLog = function (callback) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
console.log(treeMethods);