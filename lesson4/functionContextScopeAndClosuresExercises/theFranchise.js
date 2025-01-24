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

console.log(franchise.allMovies());
