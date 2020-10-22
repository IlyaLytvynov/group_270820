import { Lamp } from './lamp.js';
import { Switcher } from './switcher.js';

export class Lighter {
  constructor(root, color) {
    this.root = root;
    this.color = color;
  }

  render() {
    this.div = document.createElement('div');

    this.lamp = new Lamp(this.div, this.color);
    this.lamp.render();
    this.switcher = new Switcher(this.div, this.lamp);
    this.switcher.render();

    this.root.append(this.div);
  }
}
