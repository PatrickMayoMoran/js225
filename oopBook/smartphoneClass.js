class SmartPhone {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    console.log(`This ${this.model} is made by ${this.brand} from ${this.year}.`);
  }

  checkBatteryLevel() {
    console.log(`This ${this.model} has 75% battery left`);
  }
}

let apple = new SmartPhone('Apple', 'iPhone 12', 2020);
let samsung = new SmartPhone('Samsung', 'Galaxy S21', 2021);

apple.displayInfo();
samsung.displayInfo();

apple.checkBatteryLevel();
samsung.checkBatteryLevel();
