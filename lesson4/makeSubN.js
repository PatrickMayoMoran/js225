function subtract(a, b) {
  return a - b;
}

function makeSubN(n) {
  // implement this function using partial function application
  return function(a) {
    return subtract(a, n);
  };
}

const sub4 = makeSubN(4);
const sub7 = makeSubN(7);

console.log(sub4(10)); // 6
console.log(sub4(20)); // 16
console.log(sub7(10)); // 3
console.log(sub7(20)); // 13
 
