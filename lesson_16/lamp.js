class Lamp {
  constructor(root, color = 'yellow') {
    this.root = root;
    this.color = color;
    this.isEnabled = false;
  }

  render() {
    this.div = document.createElement('div');
    if (this.isEnabled) {
      this.div.style.backgroundColor = this.color;
    }

    this.div.style.width = '100px';
    this.div.style.height = '100px';
    this.div.style.borderRadius = '50%';
    this.div.style.border = '1px solid grey';
    this.root.append(this.div);
  }

  toggleOn() {
    this.isEnabled = true;
    this.div.style.backgroundColor = this.color;
  }

  toggleOff() {
    this.isEnabled = false;
    this.div.style.backgroundColor = 'rgba(255, 255, 255)';
  }
}

export { Lamp };
