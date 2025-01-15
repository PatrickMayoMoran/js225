function createProduct(id, name, stock = 0, price) {
  let newProduct = {
    id,
    name,
    stock,
    price,

    setPrice(newPrice) {
      if (newPrice >= 0) {
        this.price = newPrice;
      } else {
        alert('Invalid price!');
      }
    },

    describe() {
      console.log('Name: ' + this.name);
      console.log('ID: ' + this.id);
      console.log('Price: $' + this.price);
      console.log('Stock: ' + this.stock);
    },
  };

  return newProduct;
}

let scissors = createProduct(0, "scissors", 20, 15);
scissors.describe();

let drill = createProduct(1, "Cordless Drill", 15, 45);
drill.describe();

let bikeTire = createProduct(2, "Bike Tires", 7, 30);
bikeTire.describe();

let plaster = createProduct(3, "Plaster Mix", 50, 9);
plaster.describe();
