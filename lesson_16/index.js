import './this.js';
import { Button } from './button.js';
import { Switcher } from './switcher.js';
import { Timer } from './timer.js';
import { Lighter } from './lighter.js';
import { Garland } from './garland.js';

const body = document.querySelector('body');

const g = new Garland(body, 40);
g.render();

const colors = ['red', 'rgba(0,50,89, 0.3)', 'green', 'blue'];

for (let color of colors) {
  const l = new Lighter(body, color);
  l.render();
}

const timer = new Timer(body);
const timerSwitcher = new Switcher(body, timer);

timerSwitcher.render();
