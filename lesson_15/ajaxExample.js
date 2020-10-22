import { createLoader } from './loader.js';
import { productList } from './productList.js';
import { createSlideShow } from '../lesson_14/slideShow.js';

const main = document.querySelector('main');
createLoader(main);

fetch(
  'https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/advertisments'
)
  .then((resp) => {
    console.log('2');
    return resp.json();
  })
  .then((data) => {
    main.innerHTML = '';
    productList(main, data);
    const images = [];
    for (let product of data) {
      images.push(product.img);
    }
    createSlideShow(main, images);
  });

console.log('4');
