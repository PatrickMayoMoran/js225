function makeCat(name) {
  let catSound = "Meeeeooowwww, give me a goopie!";

  return {
    name,
    purr() {
      console.log(catSound);
    },
  };
}

let tiny = makeCat("Tiny");
tiny.purr();
// tiny.catSound - undefined, catSound is private data enclosed by the purr method
