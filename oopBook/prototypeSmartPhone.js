function SmartPhone(brand, model, releaseYear) {
  this.brand = brand;
  this.model = model;
  this.releaseYear = releaseYear;
}

SmartPhone.prototype.displayInfo = function() {
  console.log(`This ${this.model} is made by ${this.brand} from ${this.releaseYear}.`);
}

SmartPhone.prototype.checkBatteryLevel = function() {
  console.log(`This ${this.model} has 75% battery left.`);
}

let iPhone = new SmartPhone('Apple', 'iPhone 12', 2020);
let samsung = new SmartPhone('Samsung', 'Galaxy S21', 2021);

iPhone.displayInfo();
samsung.displayInfo();

iPhone.checkBatteryLevel();
samsung.checkBatteryLevel();
