function makeCounterLogger(firstNumber) {
  return function(secondNumber) {
    if (secondNumber > firstNumber) {
      for (let count = firstNumber; count <= secondNumber; count++) {
        console.log(count);
      }
    } else {
      for (let count = firstNumber; count >= secondNumber; count--) {
        console.log(count);
      }
    }
  }
}
let countlog = makeCounterLogger(5);
countlog(8);
/*
5
6
7
8
*/
countlog(2);
/*
5
4
3
2
*/
