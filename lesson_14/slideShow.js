function createSlideShow(wrapper, imageUrls) {
  const controls = [];
  const slides = [];
  let root;
  let viewport;
  let activeSlideIndex = 1;

  function createRoot() {
    root = document.createElement('div');
    root.classList.add('slideshow');
    wrapper.append(root);
  }

  function createControls() {
    const prev = document.createElement('button');
    const next = document.createElement('button');

    prev.classList.add('slideshow__control', 'slideshow__control_prev');
    next.classList.add('slideshow__control', 'slideshow__control_next');

    prev.textContent = 'PREV';
    next.textContent = 'NEXT';

    prev.addEventListener('click', function () {
      deactivateSlide();
      decreaseSlideIndex();
      activateSlide();
    });
    next.addEventListener('click', function () {
      deactivateSlide();
      increaseSlideIndex();
      activateSlide();
    });

    root.append(prev);
    root.append(next);
    controls.push(prev);
    controls.push(next);
  }

  function createViewport() {
    viewport = document.createElement('div');
    viewport.classList.add('slideshow__viewport');
    root.append(viewport);
  }

  function createSlides() {
    for (let i = 0; i < imageUrls.length; i++) {
      const imgUrl = imageUrls[i];
      const slide = document.createElement('div');
      slide.classList.add('slideshow__slide');

      if (i === activeSlideIndex) {
        slide.classList.add('slideshow__slide_active');
      }

      const img = document.createElement('img');
      img.src = imgUrl;
      img.alt = 'Some picture';
      img.classList.add('slideshow__pic');
      slide.append(img);
      viewport.append(slide);
      slides.push(slide);
    }
  }

  function increaseSlideIndex() {
    if (activeSlideIndex + 1 < slides.length) {
      activeSlideIndex++;
    } else {
      activeSlideIndex = 0;
    }

    console.log(activeSlideIndex);
  }

  function decreaseSlideIndex() {
    if (activeSlideIndex - 1 < 0) {
      activeSlideIndex = slides.length - 1;
    } else {
      activeSlideIndex--;
    }
    console.log(activeSlideIndex);
  }

  function activateSlide() {
    const nextSlide = slides[activeSlideIndex];
    nextSlide.classList.add('slideshow__slide_active');
  }

  function deactivateSlide() {
    const nextSlide = slides[activeSlideIndex];
    nextSlide.classList.remove('slideshow__slide_active');
  }

  createRoot();
  createControls();
  createViewport();
  createSlides();
}

createSlideShow(document.querySelector('body'), [
  'https://www.w3schools.com/howto/img_snow_wide.jpg',
  'https://www.w3schools.com/howto/img_lights_wide.jpg',
  'https://www.w3schools.com/howto/img_mountains_wide.jpg',
]);

createSlideShow(document.querySelector('body'), [
  'https://www.w3schools.com/howto/img_nature_wide.jpg',
  'https://www.w3schools.com/howto/img_snow_wide.jpg',
  'https://www.w3schools.com/howto/img_lights_wide.jpg',
  'https://www.w3schools.com/howto/img_mountains_wide.jpg',
]);

createSlideShow(document.querySelector('body'), [
  'https://www.w3schools.com/howto/img_lights_wide.jpg',
  'https://www.w3schools.com/howto/img_mountains_wide.jpg',
]);
