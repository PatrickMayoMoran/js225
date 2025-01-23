let inventory = (function() {
  let stocks = [];
  function isValid(newStock) {
    return stocks.every(function(stock) {
      return newStock.name !== stock.name;
    });
  }

  return {
    addStock(newStock) {
      if (isValid(newStock)) stocks.push(newStock);
    },

    stockCounts() {
      stocks.forEach(function(stock) {
        console.log(stock.name + ': ' + String(stock.count));
      });
    },
  };
})();

inventory.addStock({
  name: 'ballpen',
  count: 5,
});

inventory.stockCounts();

inventory.addStock({
  name: 'ballpen',
  count: 5,
});

inventory.stockCounts();

// no more direct access to stocks!
// inventory.stocks.push({name: 'cats', count: 10});
