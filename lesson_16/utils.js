function getRandomChannel() {
  return Math.floor(Math.random() * 255);
}

function getRandomColor() {
  return `rgb(${getRandomChannel()}, ${getRandomChannel()}, ${getRandomChannel()})`;
}

export { getRandomColor };
