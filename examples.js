/**
* JS Examples
*/

/**
 * Closure
 */
function person(name) {
  var _name = name;
  function fullName() {
    console.log(_name);
  }
  return fullName;
}

person('Miguel');

function person(name) {
  if (arguments.length > 1) {
    var args = Array.prototype.slice.call(arguments);
    return args.join(' ');
  } else {
    return function(lastName) {
      return name + ' ' + lastName;
    };
  }
}

person('Miguel', 'Murillo');
person('Miguel')('Murillo');

/**
 * add array
 * @return {[Number]}
 */
[0, 1, 2, 3, 4].reduce(function(pre, curr) {
  return pre + curr;
});

/**
 * Singleton
 */
var singletonExample = (function() {
  var myInstance;

  function createInstance() {
    var object = new Object("My Instance");
    return object;
  }

  return {
    getInstance: function() {
      if (!myInstance) {
        myInstance = createInstance();
      }
      return myInstance;
    }
  };
})();

var instance = singletonExample.getInstance();

/**
 * Sum one or more values
 * @param  {[Number]}
 * @return {[Number]} Sum of arguments
 */
function sum(x) {
  if (arguments.length > 1) {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  } else {
    return function(y) {
      return x + y;
    };
  }
}

console.log(sum(2, 3)); // Outputs 5
console.log(sum(2)(3)); // Outputs 5


/**
 * arguments to Array
 * @type {[Array]}
 */
var args = Array.prototype.slice.call(arguments);

/**
 * The .bind method from Prototype.js
 * @return {[object]}
 */
Function.prototype.bind = Function.prototype.bind || function() {
  var fn = this,
    args = Array.prototype.slice.call(arguments),
    object = args.shift();
  return function() {
    return fn.apply(object,
      args.concat(Array.prototype.slice.call(arguments)));
  };
};

/**
 * Repeatify methd
 * @param  {[Number]} times
 * @return {[String]}
 */
String.prototype.repeatify = String.prototype.repeatify || function(times) {
  return new Array(times + 1).join(this);
};

String.prototype.repeatify = String.prototype.repeatify || function(times) {
  var res = '';
  for (var i = 0; i < times; i++) {
    res += this;
  }
  return res;
};

console.log('ab'.repeatify(3));
