class Vehicle {
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }

  info() {
    return `${this.make} ${this.model}`
  }

  getWheels() {
    return this.wheels;
  }
}

class Car extends Vehicle {
  constructor(make, model) {
    super(make, model, 4);
  }
}

class Motorcycle extends Vehicle  {
  constructor(make, model) {
    super(make, model, 2);
  }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model, 6);
    this.payload = payload;
  }
}

let car = new Car("Honda", "CRV");
console.log(car.getWheels());

let truck = new Truck("Ford", "F-150", "everything");
console.log(truck.getWheels());

let motorcycle = new Motorcycle("BMW", "3000");
console.log(motorcycle.getWheels());
