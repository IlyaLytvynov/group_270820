function getRandomChannel() {
  return Math.floor(Math.random() * 255);
}

function getRandomColor() {
  return `rgb(${getRandomChannel()}, ${getRandomChannel()}, ${getRandomChannel()})`;
}

function randomColoredBtn(wrapper) {
  const btn = document.createElement('button');
  btn.style.borderRadius = '50%';
  btn.style.width = '150px';
  btn.style.height = '150px';

  btn.textContent = 'Click Me';
  btn.addEventListener('click', () => {
    btn.style.transition = 'all 0.5s';
    btn.style.background = getRandomColor();
  });
  wrapper.append(btn);
}

// randomColoredBtn(document.querySelector('.task1'));

function createColoredBtns(wrapper, btnCounts) {
  const container = document.createElement('div');

  for (let i = 0; i < btnCounts; i++) {
    randomColoredBtn(container);
  }

  wrapper.append(container);
}

createColoredBtns(document.querySelector('.task2'), 3);

function collapsible(wrapper, titleText, contentText) {
  const root = document.createElement('div');
  root.classList.add('root');
  const btn = document.createElement('button');
  btn.textContent = titleText;
  btn.classList.add('collapsible__title');
  root.append(btn);
  const content = document.createElement('div');
  const p = document.createElement('p');

  p.textContent = contentText;
  content.classList.add('collapsible__content');

  content.append(p);
  root.append(content);

  btn.addEventListener('click', () => {
    // root.classList.toggle('collapsible__active');
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
  wrapper.append(root);
}

collapsible(
  document.querySelector('.task3'),
  'Hello',
  `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Debitis ea dicta error fugit exercitationem possimus fuga! 
    Accusamus quis optio ipsam assumenda, excepturi minus 
    laboriosam inventore, esse, ullam quam error! Provident.
  `
);
