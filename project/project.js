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
})();
