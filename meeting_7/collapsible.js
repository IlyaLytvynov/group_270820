function collapsible(wrapper, titleText, contentText) {
  const root = document.createElement('div');
  const btn = document.createElement('button');
  const content = document.createElement('div');
  const p = document.createElement('p');

  root.classList.add('root');
  btn.textContent = titleText;
  btn.classList.add('collapsible__title');
  root.append(btn);

  p.textContent = contentText;
  content.classList.add('collapsible__content');

  content.append(p);
  root.append(content);

  wrapper.append(root);

  btn.addEventListener('click', () => {
    // root.classList.toggle('collapsible_active');
    console.log(content.scrollHeight);
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
}

export { collapsible };
