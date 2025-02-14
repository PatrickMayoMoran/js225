/* Own Solution
function getDefiningObject(object, propKey) {
  if (object === null) return null;
  if (object.hasOwnProperty(propKey)) {
    return object;
  } else {
    let ancestor = Object.getPrototypeOf(object);
    return getDefiningObject(ancestor, propKey);
  }
}
*/

function getDefiningObject(object, propKey) {
  while (object && !object.hasOwnProperty(propKey)) {
    object = Object.getPrototypeOf(object);
  }
  return object;
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
let baz = Object.create(bar);
let qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar);     // => true
console.log(getDefiningObject(qux, 'e'));             // => null
