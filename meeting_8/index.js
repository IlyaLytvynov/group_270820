import { Image } from './image.js';
const body = document.querySelector('body');
const img = new Image(body, './car.png', 'Hello', 200, 10);
const img2 = new Image(body, './car.png', 'Tesla', 300, 25);
window.img1 = img;
img.render();
img2.render();
