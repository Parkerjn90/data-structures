var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    // create newNode variable
    var newNode = Node(value);
    // if list does not have a tail (is empty)
    if (this.tail === null) {
      // set head and tail to newNode
      this.head = newNode;
      this.tail = newNode;
      // else (if not empty)
    } else {
      // save current object's tail (currentNode) in variable
      var previousTail = this.tail;
      // reset(point) current object's tail to new node
      this.tail = newNode;
      // reset old tail's "next" value to current object's (new)tail
      previousTail.next = this.tail;
    }
  };

  list.removeHead = function () {
    // save current list's head's next value in variable
    var currentHead = this.head.value;
    var nextNode = this.head.next;
    // reset current list's head value to next Node in head's object
    this.head = nextNode;
    return currentHead;
  };

  list.contains = function (target) {
    // define current node as headde OR current node
    var currentNode = this.head || this;
    console.log(currentNode);
    // if current Node at value is equal to target,
    if (currentNode.value === target) {
      // return true;
      return true;
    }
    // check if current object at next is empty(null), if yes:
    if (currentNode.next) {


      // else if current object at next has a child (is not null)
    } else {
      // return result of contains called on current object at next
      console.log('currentNode: ', currentNode);
      console.log('currentNode.next: ', currentNode.next);
      return currentNode.contains(target);
    }
    // return false if none of the above
    return false;
  };

  return list;
};

var Node = function (value, next) {
  // create new node object
  var node = {};
  //  add key "value" to node assigned to inputValue
  node.value = value;
  // add key "next" to point to next node(passed value) OR null if no passed value for next
  node.next = next || null;
  // return new node object
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
