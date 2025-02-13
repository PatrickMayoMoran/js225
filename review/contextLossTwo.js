// internal function losing context

let tiny = {
  name: "Tiny",
  species: "Cat",
  meow() {
    function purr() {
      console.log(`I am a happy cat purring, my name is ${this.name}`);
    };

    purr();
  },
}

tiny.meow() // wish for 'Tiny', get undefined

// Solution 1 - lexical scoped variable of desired context
let martin = {
  name: "Martin",
  meow() {
    let self = this // lock in self as holding object
    function purr() {
      console.log(`I am a happy cat purring, my name is ${self.name}`);
    };

    purr();
  },
};

martin.meow();

// Solution 2 - call/apply with needed context
let olli = {
  name: "Ollipop",
  meow() {
    function purr() {
      console.log(`I am a happy cat purring, my name is ${this.name}`);
    };

    purr.call(this);
  },
};

olli.meow();

// Solution 3 - function expression with bind
let mrKitty = {
  name: "Mr. Kitty",
  meow() {
    let purr = function () {
      console.log(`I am a happy cat purring, my name is ${this.name}`);
    }.bind(this); // function expression with bind immediately called on it

    purr();
  },
};

mrKitty.meow();
