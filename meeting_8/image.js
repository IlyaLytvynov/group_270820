class Image {
  constructor(root, url, title, width, speed = 5) {
    this.root = root;
    this.url = url;
    this.title = title;
    this.width = width;
    this.speed = speed;
  }

  render() {
    this.figure = document.createElement('figure');
    const template = `
      <img class="test" style="width: 100%" src="${this.url}" alt="" />
      <figcaption>${this.title}</figcaption>
    `;

    this.figure.addEventListener('click', () => {
      this.moveRight();
    });
    this.figure.innerHTML = template;
    this.figure.style.width = `${this.width}px`;
    this.figure.style.position = `relative`;
    this.figure.style.left = `0px`;
    this.root.append(this.figure);
  }

  moveRight() {
    const prevLeft = parseInt(this.figure.style.left);
    this.figure.style.left = `${prevLeft + this.speed}px`;
    console.log(this.figure.style.left);
  }

  moveDown() {
    const prevLeft = parseInt(this.figure.style.left);
    this.figure.style.left = `${prevLeft + this.speed}px`;
    console.log(this.figure.style.left);
  }
}

export { Image };
