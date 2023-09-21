const chai = require('chai');
const expect = chai.expect;
const Person = require('../problems/person');

describe('Person', () => {
  let person;

  beforeEach(() => {
    person = new Person('Greg', 20);
  });

  describe('constructor', () => {
    it('should create a new instance with the name and age properties', () => {
      expect(person).to.have.property('name');
      expect(person).to.have.property('age');
      expect(person.name).to.equal('Greg');
      expect(person.age).to.equal(20);
    });
  });

  describe('sayHello', () => {
    it('should return a string with instance name and hello', () => {
      const greeting = person.sayHello();
      expect(greeting).to.equal('Hello, my name is Greg.');
    });
  });

  describe('visit', () => {
    it('should state that this instance visited the passed person instance', () => {
      const person2 = new Person('Naomi', 18);
      const visited = person.visit(person2);
      expect(visited).to.equal('Greg visited Naomi');
    });
  });

  describe('switchVisit', () => {
    it('should invoke the `visit` function of the parameter otherPerson, passing in the current instance as the argument', () => {
      const person2 = new Person('Naomi', 18);
      let visited = '';
  
      person2.visit = function (personInstance) {
        visited = personInstance.name + ' visited ' + this.name;
      };
  
      person.switchVisit(person2);
  
      expect(visited).to.equal('Greg visited Naomi');
    });
  });

  describe('update', () => {
    context('when the incoming argument is not a valid object', () => {
      it('should throw a TypeError with a clear message', () => {
        expect(() => person.update('invalid')).to.throw(TypeError, 'Invalid argument. Expected an object.');
        expect(() => person.update(null)).to.throw(TypeError, 'Invalid argument. Expected an object.');
        expect(() => person.update(123)).to.throw(TypeError, 'Invalid argument. Expected an object.');
      });
    });

    context('when the incoming argument is a valid object', () => {
      it('should update the instance properties with the values from the passed-in object', () => {
        person.update({ name: 'Jane Smith', age: 25 });
        expect(person.name).to.equal('Jane Smith');
        expect(person.age).to.equal(25);
      });

      it('should throw a TypeError if the passed-in object does not have name and age properties', () => {
        expect(() => person.update({ age: 25 })).to.throw(TypeError, 'Invalid object properties. Expected name and age properties.');
        expect(() => person.update({ name: 'Jane Smith' })).to.throw(TypeError, 'Invalid object properties. Expected name and age properties.');
        expect(() => person.update({})).to.throw(TypeError, 'Invalid object properties. Expected name and age properties.');
      });
    });
  });
});
