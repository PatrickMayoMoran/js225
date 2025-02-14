let cat = {
  purr() {
    console.log("Purr");
  },
}

let tiny = Object.create(cat);

tiny.meow = () => console.log("Meow");

console.log(tiny.hasOwnProperty("purr")); // false, it's cats
console.log(cat.hasOwnProperty("purr")); // true, defined on cat
console.log(Object.getOwnPropertyNames(tiny)); // ["meow"];
