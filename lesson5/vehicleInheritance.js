class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  info() {
    return `${this.make} ${this.model}`
  }

  getWheels() {
    return 4;
  }
}

class Car extends Vehicle {
}

class Motorcycle extends Vehicle  {
  getWheels() {
    return 2;
  }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model);
    this.payload = payload;
  }

  getWheels() {
    return 6;
  }
}

let car = new Car("Honda", "CRV");
console.log(car.getWheels());

let truck = new Truck("Ford", "F-150", "everything");
console.log(truck.getWheels());

let motorcycle = new Motorcycle("BMW", "3000");
console.log(motorcycle.getWheels());
