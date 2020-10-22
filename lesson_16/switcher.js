import { Button } from './button.js';

class Switcher {
  constructor(root, toggable) {
    this.root = root;
    this.toggable = toggable;
  }

  render() {
    this.btn = new Button(this.root, 'on/off', () => {
      if (this.toggable.isEnabled) {
        this.toggable.toggleOff();
      } else {
        this.toggable.toggleOn();
      }
    });

    this.btn.render();
  }
}

export { Switcher };
