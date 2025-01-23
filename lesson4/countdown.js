function countdown(count) {
  (function output(num) {
    if (num < 0) {
      console.log('Done!');
      return;
    } else {
      console.log(num);
      output(num - 1);
    }
  })(count);
}

countdown(7);
