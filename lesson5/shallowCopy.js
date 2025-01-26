function shallowCopy(object) {
  // ...
  let prototype = Object.getPrototypeOf(object);
  let shallow = Object.create(prototype);

  let propNames = Object.getOwnPropertyNames(object);
  propNames.forEach(n => shallow[n] = object[n]);

  return shallow;
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
bar.c = 3;
bar.say = function() {
  console.log('c is ' + this.c);
};

let baz = shallowCopy(bar);
console.log(baz.a);       // => 1
baz.say();                // => c is 3
console.log(baz.hasOwnProperty('a'));  // false
console.log(baz.hasOwnProperty('b'));  // false
console.log(baz.hasOwnProperty('c'));  // true
