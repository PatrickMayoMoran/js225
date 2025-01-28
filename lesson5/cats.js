"use strict"

class Cat {
  constructor(name="Kitty") {
    this.name = name;
    console.log(`I'm a cat and my name is ${this.name}!`);
  }
}

let kitty = new Cat();
