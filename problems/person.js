class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello, my name is ${this.name}.`;
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`;
  }

  switchVisit(otherPerson) {
    otherPerson.visit(this);
  }

  update(obj) {
    if (typeof obj !== 'object' || obj === null) {
      throw new TypeError('Invalid argument. Expected an object.');
    }

    if (!('name' in obj) || !('age' in obj)) {
      throw new TypeError('Invalid object properties. Expected name and age properties.');
    }

    this.name = obj.name;
    this.age = obj.age;
  }
}

module.exports = Person;
