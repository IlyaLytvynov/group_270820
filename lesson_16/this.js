'use strict';
//  THIS - обьект от имени которого вызывается функция
class Car {
  constructor(title, model, fuelLevel) {
    const y = 'asdas';
    this.test = 'asdasd';
    this.title = title;
    this.model = model;
    this.fuelLevel = fuelLevel;
    this.countOfWhels = 4;
  }

  move() {
    console.log('Drive ' + this.test + this.title);
  }
}

const car1 = new Car('BMW', '3series', 10);
const car2 = new Car('Mercedes', 's-class', 20);
const car3 = new Car('KIA', 'sportage', 7);

console.log(car1);
console.log(car2);
console.log(car3);

car1.move();
console.log(car1.title);
car2.move();
car3.move();
