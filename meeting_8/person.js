// Инкапсуляция
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHi() {
    console.log(`My name is ${this.firstName} ${this.lastName}`);
  }

  walk() {
    console.log('Walking 1 step');
  }
}

// НАСЛЕДОВАНИЕ
class Developer extends Person {
  constructor(firstName, lastName, lang) {
    super(firstName, lastName);
    this.lang = lang;
  }

  writeCode() {
    console.log(`I'm conding in ${this.lang}`);
  }
}

const jsDeveloper = new Developer('Jack', 'Jones', 'js');
const cppDeveloper = new Developer('John', 'Doe', 'C++');

jsDeveloper.sayHi();
jsDeveloper.writeCode();
jsDeveloper.walk();
cppDeveloper.writeCode();
