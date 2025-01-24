const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    return [1, 2, 3].map(function(number) {
      return `${this.name} ${number}`;
    }, this);
  },
};

/* ARROW - Arrow function which retains this of space where defined
const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    return [1, 2, 3].map(n => {
      return `${this.name} ${n}`;
    });
  },
}
*/

/* SELF - Self to reference this
const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    let self = this;
    return [1, 2, 3].map(function(number) {
      return `${self.name} ${number}`;
    });
  },
}
*/

/* IIFE - using immediately invoked function expression with argument
const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    return (function(name) {
      return [1, 2, 3].map(function(number) {
        return `${name} ${number}`;
      });
  })(this.name);
  }
};
*/

console.log(franchise.allMovies());
