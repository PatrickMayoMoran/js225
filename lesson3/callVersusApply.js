let extraArguments = function (tiny, cat) {
  console.log(this.name);
  console.log(tiny);
  console.log(cat);
}

let myObject = {name: "Tiny Cat"};

// call - explicit execution context with comma separated arguments
extraArguments.call(myObject, "teeny tiny", "kitty kat");

// apply - explicit execution context with arguments in an array
extraArguments.apply(myObject, ["itty bitty", "catty cutie"]);
