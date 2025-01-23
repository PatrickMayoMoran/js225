function subtract(a, b) {
  return a - b;
}

function makeSub() {
  // implement this function using partial function application
  return function(a) {
    return subtract(a, 5);
  };
}

const sub5 = makeSub();

console.log(sub5(10)); // 5
console.log(sub5(20)); // 15
