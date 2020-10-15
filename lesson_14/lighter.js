function lighter(wrapper) {
  const COLORS = ['red', 'yellow', 'green'];
  const ACTIVE_CLASS_NAME = 'lighter__light_active';
  const elements = []; // Array<DOMElement>
  let root;

  function createLights() {
    for (let color of COLORS) {
      const light = document.createElement('button');
      light.classList.add('lighter__light', `lighter__light_${color}`);
      light.addEventListener('click', toggleOn);
      root.append(light);
      elements.push(light);
    }
  }

  function createRoot() {
    root = document.createElement('div');
    root.classList.add('lighter');
    wrapper.append(root);
  }

  function toggleOff() {
    for (const element of elements) {
      element.classList.remove(ACTIVE_CLASS_NAME);
    }
  }

  function toggleOn() {
    toggleOff();
    this.classList.add(ACTIVE_CLASS_NAME); // This Элемент ДОМ дерева
  }

  createRoot();
  createLights();
}

export { lighter };
