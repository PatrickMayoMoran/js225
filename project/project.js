(function() {
  let _ = function(element) {
    let u = {
      first() {
        return element[0];
      },

      last() {
        return element[element.length - 1];
      },

      without(...args) {
        return element.filter(e => !args.includes(e));
      },

    };

    return u;
  };

  window._ = _;

  _.range = function(...args) {
    let start, end;
    start = args.length === 1 ? 0 : args[0];
    end = args.length === 1 ? args[0] : args[1];
    let newRange = [];
    for (let i = start; i < end; i++) {
      newRange.push(i);
    };
    return newRange;
    };

})();
