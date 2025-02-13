// context loss by removing method from holding object
let tiny = {
  name: "Tiny",
  species: "Cat",
  meow() {
    console.log(this.name + ' ' + this.species);
  },
}

let otherMeow = tiny.meow;
otherMeow(); // undefined undefined

// Solution - hardbound version
let workingMeow = tiny.meow.bind(tiny);
workingMeow(); // Tiny Cat = version of meow permanently bound to tiny as object
