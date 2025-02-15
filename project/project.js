(function() {
  let _ = function(element) {
    let u = {
      first() {
        return element[0];
      },
    };

    return u;
  };

  window._ = _;
})();
