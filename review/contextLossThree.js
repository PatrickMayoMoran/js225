// function as argument
let tiny = {
  name: 'Tiny',
  eatTreats() {
    ['goopie', 'crunchy', 'bunny'].forEach(function(treat) {
      console.log(`${this.name} is happily eating ${treat}`);
    }, this);
  },
}

tiny.eatTreats();
