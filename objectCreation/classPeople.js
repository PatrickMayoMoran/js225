class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  communicate() {
    console.log("Honestly communicating with heart and soul");
  }

  eat() {
    console.log("Eat your heart out!");
  }

  sleep() {
    console.log("Snoozing away happily");
  }
}


class Doctor extends Person {
  constructor(firstName, lastName, age, gender, specialization) {
    super(firstName, lastName, age, gender);
    this.specialization = specialization;
  }

  diagnose() {
    console.log("Solving the mysteries of the medical world!");
  }
}

class Professor extends Person {
  constructor(firstName, lastName, age, gender, subject) {
    super(firstName, lastName, age, gender);
    this.subject = subject;
  }

  teach() {
    console.log("Educating the youths");
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, gender, degree) {
    super(firstName, lastName, age, gender);
    this.degree = degree;
  }

  study() {
    console.log("How does one learn it all?");
  }
}

class GraduateStudent extends Student {
  constructor(firstName, lastName, age, gender, undergradDegree, graduateDegree) {
    super(firstName, lastName, age, gender, undergradDegree);
    this.graduateDegree = graduateDegree;
  }

  research() {
    console.log("Master's Degree? Master of nothing!");
  }
}


const person = new Person('Foo', 'Bar', 21, 'male');
console.log(person instanceof Person);       // logs true
console.log(person instanceof Doctor);       // logs false
console.log(person instanceof Professor);    // logs false
console.log(person instanceof Student);      // logs false
person.eat();                                // logs 'Eating'
person.communicate();                        // logs 'Communicating'
person.sleep();                              // logs 'Sleeping'
console.log(person.fullName());              // logs 'Foo Bar'

const doctor = new Doctor('Bar', 'Qux', 21, 'female', 'Pediatrics');
console.log(doctor instanceof Person);       // logs true
console.log(doctor instanceof Doctor);       // logs true
console.log(doctor instanceof Professor);    // logs false
console.log(doctor instanceof Student);      // logs false
doctor.eat();                                // logs 'Eating'
doctor.communicate();                        // logs 'Communicating'
doctor.sleep();                              // logs 'Sleeping'
console.log(doctor.fullName());              // logs 'Bar Qux'
doctor.diagnose();                           // logs 'Diagnosing'

const professor = new Professor('Bar', 'Foo', 48, 'female', 'Law');
console.log(professor instanceof Person);    // logs true
console.log(professor instanceof Professor); // logs true
console.log(professor instanceof Doctor);    // logs false
console.log(professor instanceof Student);   // logs false
professor.eat();                             // logs 'Eating'
professor.communicate();                     // logs 'Communicating'
professor.sleep();                           // logs 'Sleeping'
console.log(professor.fullName());           // logs 'Bar Foo'
professor.teach();                           // logs 'Teaching'

const graduateStudent = new GraduateStudent('Qux', 'Bar', 21, 'non-binary', 'BS Industrial Engineering', 'MS Industrial Engineering');
console.log(graduateStudent instanceof Person);          // logs true
console.log(graduateStudent instanceof Student);         // logs true
console.log(graduateStudent instanceof GraduateStudent); // logs true
console.log(graduateStudent instanceof Professor);       // logs false
console.log(graduateStudent instanceof Doctor);          // logs false
graduateStudent.eat();                                   // logs 'Eating'
graduateStudent.communicate();                           // logs 'Communicating'
graduateStudent.sleep();                                 // logs 'Sleeping'
console.log(graduateStudent.fullName());                 // logs 'Qux Bar'
graduateStudent.study();                                 // logs 'Studying'
graduateStudent.research();                              // logs 'Researching'

console.log("Mayo testing stuff");
// instanceof checks whether object is a thing or has in inheritance chain
console.log(graduateStudent instanceof Person);
// typeof returns string type for custom types
console.log(typeof graduateStudent);
// Object.getPrototypeOf() gets us the prototype of an object
console.log(Object.getPrototypeOf(graduateStudent));
// Object.prototype.isPrototypeOf() tells us if calling is an ancestor of argument
console.log(Student.prototype.isPrototypeOf(graduateStudent));
