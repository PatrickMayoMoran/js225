function makeList() {
  let list = [];

  return function(newItem) {
    let index;

    if (newItem) {
      index = list.indexOf(newItem);
      if (index === - 1) {
        list.push(newItem);
        console.log(newItem, ' was added!');
      } else {
        list.splice(index, 1);
        console.log(newItem, ' was removed!');
      }
    } else {
      if (list.length === 0) {
        console.log('The list is empty.');
      } else {
        list.forEach(function(item) {
          console.log(item);
        });
      }
    }
  }
}

let list = makeList();
list('make breakfast');
list();
list('make breakfast');
list();
