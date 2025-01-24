class Vehicle {
  constructor(color, weight) {
    this.color = color;
    this.weight = weight;
  }

  accelerate() {
    console.log('Speeding up...');
  }

  decelerate() {
    console.log('...slowing down.');
  }
}

class Car extends Vehicle {
  constructor(color, weight, licensePlate) {
    super(color, weight);
    this.licensePlate = licensePlate;
  }

  honk() {
    console.log('Meep meep!');
  }
}

class Boat extends Vehicle {
  constructor(color, weight, homePort) {
    super(color, weight);
    this.homePort = homePort;
  }

  dropAnchor() {
    console.log(`Dropping anchor at home in ${this.homePort}.`);
  }
}

class Plane extends Vehicle {
  constructor(color, weight, airline) {
    super(color, weight);
    this.airline = airline;
  }

  takeOff() {
    console.log('Taking off...');
  }

  land() {
    console.log('...landing.');
  }
}

let car = new Car('maroon', '2 tons', 'QPK4009');
let plane = new Plane('blue', '20 tons', 'Swiss Air');
let boat = new Boat('white', '1 ton', 'Erie, Pennsylvania');

plane.accelerate();
plane.decelerate();
plane.takeOff();
plane.land();

car.accelerate();
car.decelerate();
car.honk();

boat.accelerate();
boat.decelerate();
boat.dropAnchor();

console.log(car instanceof Vehicle);
console.log(boat instanceof Vehicle);
console.log(car instanceof Car);
console.log(boat instanceof Car);
