function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  };
}

function greet(greeting, name) {
  let capitalized = greeting[0].toUpperCase() + greeting.slice(1)
  let message = capitalized + ', ' + name + '!';
  console.log(message);
}

let sayHello = partial(greet, 'hello');
sayHello('Brandon');

let sayHi = partial(greet, 'hi');
sayHi('Sarah');
