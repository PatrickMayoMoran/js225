"use strict"

class Cat {
  constructor(name="Kitty") {
    this.name = name;
  }

  static genericGreeting() {
    console.log("Hello! I'm a cat!");
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

Cat.genericGreeting();
