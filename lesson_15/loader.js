function createLoader(wrapper) {
  const h2 = document.createElement('h2');
  h2.textContent = '...LOADING...';
  wrapper.append(h2);
}

export { createLoader };
