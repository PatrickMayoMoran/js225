let obj1 = {
  a: "This is Object 1",
  dynamic () {
      let bar = () => {
          console.log(this.a);
      }
      bar();
    },
}

let obj2 = {a: "This is Object 2",};

obj2.alsoDynamic = obj1.dynamic;

obj1.dynamic();
obj2.alsoDynamic();
