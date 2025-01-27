Object.prototype.begetObject = function() {
  function T() {};
  T.prototype = this;
  return new T();
}

let foo = {
  a: 1,
};

let bar = foo.begetObject();
console.log(foo.isPrototypeOf(bar));         // true
