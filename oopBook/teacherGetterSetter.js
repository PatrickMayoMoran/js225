let teacher = {
  firstName: 'Alan',
  lastName: 'Stone',

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set name(nameArray) {
    this.firstName = nameArray[0];
    this.lastName = nameArray[1];
  },
}

teacher.name = ['Mr.', 'Dozer'];
console.log(teacher.fullName);
