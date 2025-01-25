// Replace the function prototype for each subtype constructor - Object.create
// Reset subtype's prototype constructor to that subtype
// In subtype constructor, call super's constructor with Function.prototype.call

function Vehicle(color, weight) {
  this.color = color;
  this.weight = weight;
}

Vehicle.prototype.accelerate = function () {
  console.log('Accelerating...');
}

Vehicle.prototype.decelerate = function () {
  console.log('Decelerating...');
}

function Car(color, weight, license) {
  Vehicle.call(this, color, weight);
  this.license = license;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.honk = function() {
  console.log('Honking! Meep Meep!');
}

function Boat(color, weight, homePort) {
  Vehicle.call(this, color, weight);
  this.homePort = homePort;
}

Boat.prototype = Object.create(Vehicle.prototype);
Boat.prototype.constructor = Boat;

Boat.prototype.dropAnchor = function() {
  console.log(`This boat is dropping anchor in ${this.homePort}`);
}

function Plane(color, weight, airline) {
  Vehicle.call(this, color, weight);
  this.airline = airline;
}

Plane.prototype = Object.create(Vehicle.prototype);
Plane.prototype.constructor = Plane;

Plane.prototype.takeOff = function() {
  console.log('Taking Off!');
}

Plane.prototype.land = function() {
  console.log('Landing!');
}

let car = new Car('maroon', '1 ton', 'KTP4600');
car.accelerate();
car.decelerate();
car.honk();
console.log(car);
console.log(Object.getPrototypeOf(car));

let boat = new Boat('white', '500 pounds', 'Erie, Pennsylvania');
boat.accelerate();
boat.decelerate();
boat.dropAnchor();
console.log(boat);
console.log(Object.getPrototypeOf(boat));

let plane = new Plane('blue', '10 tons', 'Swiss Air');
plane.accelerate();
plane.decelerate();
plane.takeOff();
plane.land();
console.log(plane);
console.log(Object.getPrototypeOf(Object.getPrototypeOf(plane)));
