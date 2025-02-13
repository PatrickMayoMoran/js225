// context loss by removing method from holding object
let tiny = {
  name: "Tiny",
  species: "Cat",
  meow() {
    console.log(this.name + ' ' + this.species);
  },
}

let otherMeow = tiny.meow;
otherMeow() // undefined undefined
