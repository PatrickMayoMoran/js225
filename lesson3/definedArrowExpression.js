let obj1 = {
  name: "Object 1",
  dynamic: () => {
      console.log(this);
    },
}

let obj2 = {name: "Object 2",};

obj2.alsoDynamic = obj1.dynamic;

obj1.dynamic();
obj2.alsoDynamic();
