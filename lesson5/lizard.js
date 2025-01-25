function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = Lizard();
// lizzy.scamper(); // ?
global.scamper(); // scamper was assigned on global object
