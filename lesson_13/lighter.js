(() => {
  function lighter(wrapper) {
    const elements = wrapper.querySelectorAll('.lighter__light'); // Array<DOMElement>
    const ACTIVE_CLASS_NAME = 'lighter__light_active';

    function toggleOff() {
      for (const element of elements) {
        element.classList.remove(ACTIVE_CLASS_NAME);
      }
    }

    function toggleOn() {
      toggleOff();
      this.classList.add(ACTIVE_CLASS_NAME); // This Элемент ДОМ дерева
    }

    for (const element of elements) {
      console.log(element);
      element.addEventListener('click', toggleOn);
    }
  }

  const lighters = document.querySelectorAll('.lighter');

  for (const el of lighters) {
    lighter(el);
  }
})();
