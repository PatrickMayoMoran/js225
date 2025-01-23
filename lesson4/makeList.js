function makeList() {
  let list = [];
  return function(item) {
    if (!item) {
      if (list.length === 0) {
        console.log("The list is empty");
      } else {
        list.forEach(i => console.log(i));
      }
    } else if (list.includes(item)) {
      let index = list.indexOf(item);
      list.splice(index, 1);
      console.log(`${item} removed!`);
    } else {
      list.push(item);
      console.log(`${item} added!`);
    }
  }
}

let list = makeList();
list();
// The list is empty.
list('make breakfast');
// make breakfast added!
list('read book');
// read book added!
list();
// make breakfast
// read book
list('make breakfast');
// make breakfast removed!
list();
// read book
