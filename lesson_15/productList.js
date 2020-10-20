/**
 *
 * @param {DOMNode} wrapper  элемент куда будет монтироваться список товаров
 * @param {Array<{title: string, img: string, description: string, id: number}>} products Массив продуктов
 */
function productList(wrapper, products) {
  console.log(wrapper, products);
  const ul = document.createElement('ul');
  ul.classList.add('products');

  for (let product of products) {
    console.log(product);
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = product.img;
    const h3 = document.createElement('h3');
    h3.textContent = product.title;
    li.append(img);
    li.append(h3);
    ul.append(li);
  }

  wrapper.append(ul);
}

export { productList };
