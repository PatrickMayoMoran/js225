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
