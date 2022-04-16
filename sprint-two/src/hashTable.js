

var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};


HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // define pair as baby array
  var pair = [k, v];
  var bucket = this._storage.get(index);
  // check if current index in storage has value, if not...
  if (!bucket) {
    // first create a bucket array
    var bucketArray = [];
    // set the index(value) to bucket
    bucketArray.push(pair);
    // push pair into the bucket
    this._storage.set(index, bucketArray);
    // else if DOES have value
  } else {
    // iterate over array at the storageindex
    for (var i = 0; i < bucket.length; i++) {
      // if the first value of any of the arrays in bucket = inphut key,
      if (bucket[i][0] === k) {
        // reset the second value of the current array in bucket
        bucket[i][1] = v;
        return;
      }
    }
    // if key IS defined (is already there) redefine value at current index as input value
    bucket.push(pair);
    this._storage.set(index, bucket);
  }
};



HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // create bucket variable set to the get function in _storage
  var bucket = this._storage.get(index);
  // iterate over the bucket
  for (var i = 0; i < bucket.length; i++) {
    // if the first value in current index(array) in bucket is equal to the given key
    if (bucket[i][0] === k) {
      // then return the second value in the current index in bucket
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function (k) {
  //
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


