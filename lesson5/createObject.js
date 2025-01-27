function createObject(obj) {
  // ...
  function T() {};
  T.prototype = obj;
  return new T();
}

let foo = {
  a: 1
};

let bar = createObject(foo);
console.log(foo.isPrototypeOf(bar));         // true
