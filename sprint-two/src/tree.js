var Tree = function (value) {
  var newTree = {};
  newTree.value = value;
  // addChild: this.children.push({value: value})
  // your code here
  newTree.children = []; // [{5: 5}]
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  // push current value
  this.children.push(Tree(value));
};

treeMethods.contains = function (target) {
  var target = target;
  var result = false;

  if (this.value === target) {
    result = true;
  } else {
    // check for children... if yes...
    if (this.children.length) {
      // for EACH child,
      for (var i = 0; i < this.children.length; i++) {
        console.log('this.children[i]', this.children[i]);
        // result will equal whether or not each(any) child contains target
        if (this.children[i].contains(target)) {
          result = true;
        }
      }
    }
  }
  // return result
  return result;
};

// var newTree = Tree('x')
// newTree.value



/*
 * Complexity: What is the time complexity of the above functions?
 */


// I - value
// O - an object with the properties:
         // value: = inputvalue
         // children: =