function  SmartPhone(brand, model, releaseYear) {
  this.brand = brand;
  this.model = model;
  this.releaseYear = releaseYear;

  this.checkBatteryLevel = function() {
    console.log("Checking battery power...");
  }

  this.displayInfo = function() {
    console.log(`This is a ${this.model} made by ${this.brand} from ${this.releaseYear}`);
  }
}

let iPhone = new SmartPhone("Apple", "iPhone 12", 2020);
let galaxy = new SmartPhone("Samsung", "Galaxy S21", 2021);

iPhone.displayInfo();
galaxy.displayInfo();
