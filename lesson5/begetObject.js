Object.prototype.begetObject = function() {
  return Object.create(this);
}

let foo = {
  a: 1,
};

let bar = foo.begetObject();
console.log(foo.isPrototypeOf(bar));         // true
