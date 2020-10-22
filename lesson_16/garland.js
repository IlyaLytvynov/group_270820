import { Lamp } from './lamp.js';
import { Switcher } from './switcher.js';
import { getRandomColor } from './utils.js';

export class Garland {
  constructor(root, count = 1) {
    this.root = root;
    this.count = count;
    this.intervalId = null;
    this.lamps = [];
    this.isEnabled = false;
  }

  render() {
    this.div = document.createElement('div');
    this.div.style.display = 'flex';
    this.div.style.flexWrap = 'wrap';
    for (let i = 0; i < this.count; i++) {
      const lamp = new Lamp(this.div, getRandomColor());
      lamp.render();
      this.lamps.push(lamp);
    }

    this.switcher = new Switcher(this.div, this);
    this.switcher.render();
    this.root.append(this.div);
  }

  toggleOn() {
    this.isEnabled = true;
    this.intervalId = setInterval(() => {
      for (let lamp of this.lamps) {
        if (lamp.isEnabled) {
          lamp.toggleOff();
        } else {
          lamp.toggleOn();
        }
      }
    }, 1500);
  }

  toggleOff() {
    this.isEnabled = false;
    console.log(this.intervalId);
    clearInterval(this.intervalId);
    for (let lamp of this.lamps) {
      lamp.toggleOff();
    }
  }
}
