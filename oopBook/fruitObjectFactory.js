function Fruit(name, color) {
  return {
    name,

    color,

    isRipe() {
      return `This ${this.name} is ripe.`;
    },

    describe() {
      return `This ${this.name} is ${this.color}.`;
    },
  };
}

let apple = new Fruit('Apple', 'Red');
let banana = new Fruit('Banana', 'Yellow');
let blackberry = new Fruit('Blackberry', 'Black');
