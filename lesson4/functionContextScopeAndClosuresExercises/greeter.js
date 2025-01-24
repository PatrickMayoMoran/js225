let greeter = {
  message: (function() {
    let name = 'Naveed';
    let greeting = 'Hello';
    return `${greeting} ${name}!`;
  }
  )(),

  sayGreetings() {
    console.log(this.message);
  },
}
/*
let greeter = (function(greeting, name) {
  return {
    message: `${greeting} ${name}!`,

    sayGreetings() {
      console.log(this.message);
    },
  };
}
)('Hello', 'Naveed');
*/

greeter.sayGreetings();
