function myFilter(array, func, context) {
  const result = [];
  // let boundFunc = func.bind(context);

  array.forEach(value => {
    if (func.apply(context, [value])) {
      result.push(value);
    }
  });

  return result;
}

const filter = {
  allowedValues: [5, 6, 9],
};

myFilter([2, 1, 3, 4, 5, 6, 12], function(val) {
  return this.allowedValues.includes(val);
}, filter); // returns [5, 6]
