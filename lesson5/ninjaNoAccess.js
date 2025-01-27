let ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

// create a ninjaB object
let ninjaB = Object.create(ninjaA);
ninjaB.constructor = ninjaA.constructor;

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true
