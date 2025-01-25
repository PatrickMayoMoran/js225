class Person {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.age = age;
  }

  showAge() {
    console.log(this.#age);
  }

  set age(newAge) {
    if (newAge < 0) {
      throw new Error("You can't be younger than 0!");
    } else {
      this.#age = newAge;
    }
  }
}

let person = new Person('John', 30);
person.showAge(); // 30
person.age = 31;
person.showAge(); // 31

try {
  // This line should raise a RangeError,
  // but does not.
  person.age = -5;
  person.showAge(); // -5
} catch (e) {
  // The following line should run, but won't
  console.log('RangeError: Age must be positive');
}

// let oPerson = new Person('Mayo', -31);
let oPerson = new Person('Mayo', 31);
oPerson.showAge();
