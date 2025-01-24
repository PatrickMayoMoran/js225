class MyClass {
  myPublic() {
    return this.#myPrivate();
  }

  #myPrivate() {
    return 'This is a private method';
  }
}

let myClass = new MyClass();
console.log(myClass.myPublic());
// console.log(myClass.#myPrivate());
