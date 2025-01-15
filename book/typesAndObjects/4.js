function  SmartPhone(brand, model, releaseYear) {
  this.brand = brand;
  this.model = model;
  this.releaseYear = releaseYear;
}

let iPhone = new SmartPhone("Apple", "iPhone 12", 2020);
let galaxy = new SmartPhone("Samsung", "Galaxy S21", 2021);

console.log(iPhone.releaseYear);
console.log(galaxy.releaseYear);
