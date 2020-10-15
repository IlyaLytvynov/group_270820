function infoBox(wrapper) {
  const circleEl = wrapper.querySelector('.circle__inner');
  const poppupEl = wrapper.querySelector('.poppup');
  let isOpened = false;

  function toggleOn() {
    poppupEl.style.visibility = 'visible';
    isOpened = true;
  }

  function toggleOff() {
    poppupEl.style.visibility = 'hidden';
    isOpened = false;
  }

  function clickHandler() {
    if (isOpened) {
      toggleOff();
    } else {
      toggleOn();
    }
  }

  circleEl.addEventListener('click', clickHandler);
}

export { infoBox };
