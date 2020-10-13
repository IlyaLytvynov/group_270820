(() => {
  const redElement = document.querySelector('.lighter__light_red');
  const yellowElement = document.querySelector('.lighter__light_yellow');
  const greenElement = document.querySelector('.lighter__light_green');
  const ACTIVE_CLASS_NAME = 'lighter__light_active';

  function toggleOff() {
    redElement.classList.remove(ACTIVE_CLASS_NAME);
    yellowElement.classList.remove(ACTIVE_CLASS_NAME);
    greenElement.classList.remove(ACTIVE_CLASS_NAME);
  }

  redElement.addEventListener('click', function () {
    toggleOff();
    redElement.classList.add(ACTIVE_CLASS_NAME);
  });

  yellowElement.addEventListener('click', function () {
    toggleOff();
    yellowElement.classList.add(ACTIVE_CLASS_NAME);
  });

  greenElement.addEventListener('click', function () {
    toggleOff();
    greenElement.classList.add(ACTIVE_CLASS_NAME);
  });
})();
