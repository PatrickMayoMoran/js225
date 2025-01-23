function countdown(count) {
  (function(num) {
    let i;
    for (i = num; i >= 0; i--) {
      console.log(i);
    }
    console.log('Done!');
  })(count);
}

countdown(7);
