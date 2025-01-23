let number = 0;

function add(num) {
  number += num;
  console.log(number);
}

function subtract(num) {
  number -= num;
  console.log(number);
}

add(1);
// 1
add(42);
// 43
subtract(39);
// 4
add(6);
// 10
