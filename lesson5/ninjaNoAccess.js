let ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

// create a ninjaB object
let ninjaB = new ninjaA.constructor()

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true
