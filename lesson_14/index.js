import { sayHi, test } from './script.js';
import { lighter } from './lighter.js';

console.log('asdasdas', test);
sayHi();

function createSelect(wrapper, options) {
  // ВАШ КОД
}

createSelect(document.querySelector('body'), [
  'USA',
  'CANADA',
  'UKRAINE',
  'CHINA',
  'JAPAN',
]);

createSelect(document.querySelector('body'), [
  'DOL',
  'CAD',
  'UAH',
  'YUI',
  'JAE',
]);
