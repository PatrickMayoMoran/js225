function countdown(count) {
  (function output(num) {
    console.log(num);

    if (num === 0) {
      console.log('Done!');
    } else {
      output(num - 1);
    }
  })(count);
}

countdown(7);
