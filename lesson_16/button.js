class Button {
  constructor(root, title, onClickHandler) {
    this.root = root;
    this.title = title;
    this.onClickHandler = onClickHandler;
  }

  render() {
    this.button = document.createElement('button');
    this.button.classList.add('btn');
    this.button.textContent = this.title;
    this.button.style.background = 'rgba(80, 40, 0, 0.3)';
    this.button.style.padding = '20px';
    this.button.style.borderRadius = '8px';
    this.button.style.border = '1px solid grey';
    this.root.append(this.button);

    this.button.addEventListener('click', () => {
      this.onClickHandler();
    });
  }
}

export { Button };
