(function(type, name) {
  let myPet = {
    name,
    type,
  };

  console.log(`My pet is a ${myPet.type} and its name is ${myPet.name}`);
})('Dog', 'Moose');
