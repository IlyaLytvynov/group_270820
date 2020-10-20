import { createLoader } from './loader.js';
import { productList } from './productList.js';
import { createSlideShow } from '../lesson_14/slideShow.js';
// const xhr = new XMLHttpRequest();
// xhr.open(
//   'GET',
//   'https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/advertisments'
// );
// xhr.send();
// console.log('1');
// xhr.onload = () => {
//   console.log('2');
//   console.log('RESPONSE', xhr.response);
// };

// console.log('3');
console.log('1');
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
