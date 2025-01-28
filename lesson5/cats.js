"use strict"

class Cat {
  constructor(name="Kitty") {
    this.name = name;
  }

  greet() {
    console.log(`I'm a cat and my name is ${this.name}!`);
  }

  rename(newName) {
    this.name = newName;
  }
}

let kitty = new Cat();
kitty.greet();
kitty.rename("Tiny");
kitty.greet();
