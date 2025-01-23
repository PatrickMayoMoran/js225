function makeList() {
  let list = [];

  return {
    add(item) {
      list.push(item);
      console.log(item, 'was added!');
    },

    list() {
      if (list.length === 0) {
        console.log('The list is empty');
      } else {
        list.forEach(i => console.log(i));
      }
    },

    remove(item) {
      let index = list.indexOf(item);
      if (index === -1) {
        console.log(item, 'was not on the list');
      } else {
        list.splice(index, 1);
      }
    }
  }
}

let list = makeList();

list.add('peas');
// peas added!
list.list();
// peas
list.add('corn');
// corn added!
list.list();
// peas
//corn
list.remove('peas');
// peas removed!
list.list();
// corn
