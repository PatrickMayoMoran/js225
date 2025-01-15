function Album(title, artist, releaseYear) {
  this.title = title;
  this.artist = artist;
  this.releaseYear = releaseYear;
}

let thriller = new Album("Thriller", "Michael Jackson", 1982);
let darkSide = new Album("The Dark Side of the Moon", "Pink Floyd", 1973);

console.log(thriller.title);
console.log(darkSide.title);
