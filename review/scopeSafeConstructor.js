function Cat(name) {
  if (!(this instanceof Cat)) {
    return new Cat(name);
  }

  this.name = name;
}

let tiny = Cat("Tiny");
let martin = new Cat("Martin");

console.log(tiny instanceof Cat);
console.log(martin instanceof Cat);
console.log(tiny.name);
console.log(martin.name);
console.log(this.name);
