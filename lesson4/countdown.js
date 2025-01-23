let countdown = (function() {
  return function(num) {
    let i;
    for (i = num; i >= 0; i--) {
      console.log(i);
    }
    console.log('Done!');
  };
})();

countdown(7);
