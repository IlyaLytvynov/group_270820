(() => {
  function slideshow(wrapper) {
    const controlNext = wrapper.querySelector('.slideshow__control_next');
    const controlPrev = wrapper.querySelector('.slideshow__control_prev');
    const slidesWrapper = wrapper.querySelector('.slideshow__slides');
    const slides = wrapper.querySelectorAll('.slideshow__slide');
    const transformCount = 100 / slides.length;
    let activeSlideIndex = 0;

    function increaseSlideIndex() {
      if (activeSlideIndex + 1 < slides.length) {
        activeSlideIndex++;
      } else {
        activeSlideIndex = 0;
      }

      console.log(activeSlideIndex, transformCount);
    }

    function decreaseSlideIndex() {
      if (activeSlideIndex - 1 < 0) {
        activeSlideIndex = slides.length - 1;
      } else {
        activeSlideIndex--;
      }

      console.log(activeSlideIndex, transformCount);
    }

    function getTranslate() {
      return `translateX(-${transformCount * activeSlideIndex}%)`; // ES2015+
    }

    controlNext.addEventListener('click', function () {
      increaseSlideIndex();
      slidesWrapper.style.transform = getTranslate();
    });

    controlPrev.addEventListener('click', function () {
      decreaseSlideIndex();
      slidesWrapper.style.transform = getTranslate();
    });
  }

  slideshow(document.querySelector('.slideshow'));
})();
