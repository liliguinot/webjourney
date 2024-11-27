document.addEventListener('DOMContentLoaded', function () {
  // Elementos del DOM
  const sliderWrapper = document.querySelector('.tools-slider-wrapper');
  const slides = document.querySelectorAll('.tools-slide');
  const prevButton = document.querySelector('.slider-nav.prev');
  const nextButton = document.querySelector('.slider-nav.next');
  const indicatorsContainer = document.querySelector('.slider-indicators');
  const toolImg = document.querySelector('.tool-img'); // Elemento de la imagen a cambiar

  let currentSlide = 0;

  // Array con las rutas de las imágenes para cada slide
  const images = [
    'assets/media/webjourney-tools-branding.png',    // Slide 1
    'assets/media/webjourney-tools-seo.png',     // Slide 2
    'assets/media/webjourney-tools-copy.png', // Slide 3
    'assets/media/webjourney-tools-av.png'  // Slide 4
  ];

  // Array con las transformaciones para cada slide
  const transformations = [
    'scale(0.7) rotate(30deg)',  // Transformación Slide 1
    'scale(0.7) rotate(-15deg)',  // Transformación Slide 2
    'scale(1.2) rotate(10deg)', // Transformación Slide 3
    'scale(1) rotate(-10deg)'   // Transformación Slide 4
  ];

  // Crear indicadores
  slides.forEach((_, index) => {
    const indicator = document.createElement('button');
    indicator.className = 'indicator';
    indicator.setAttribute('aria-label', `Ir a slide ${index + 1}`);
    indicator.addEventListener('click', () => goToSlide(index));
    indicatorsContainer.appendChild(indicator);
  });

  const indicators = document.querySelectorAll('.indicator');

  // Función para actualizar el slide activo
  function updateSlide() {
    // Actualizar slides
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentSlide);
    });

    // Actualizar indicadores
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentSlide);
    });

    // Actualizar la imagen según el slide actual
    if (toolImg && images[currentSlide]) {
      toolImg.src = images[currentSlide];
    }

    // Actualizar la transformación según el slide actual
    if (toolImg && transformations[currentSlide]) {
      toolImg.style.transform = transformations[currentSlide];
    }

    // Actualizar estado de los botones
    prevButton.disabled = currentSlide === 0;
    nextButton.disabled = currentSlide === slides.length - 1;
  }

  // Función para ir a un slide específico
  function goToSlide(index) {
    currentSlide = index;
    updateSlide();
  }

  // Event listeners para los botones
  prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
      goToSlide(currentSlide + 1);
    }
  });

  // Inicializar el primer slide
  updateSlide();

  // Opcional: Autoplay
  let autoplayInterval;

  function startAutoplay() {
    autoplayInterval = setInterval(() => {
      if (currentSlide < slides.length - 1) {
        goToSlide(currentSlide + 1);
      } else {
        goToSlide(0);
      }
    }, 5000); // Cambiar slide cada 5 segundos
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  // Iniciar autoplay y detenerlo cuando el usuario interactúa
  startAutoplay();

  sliderWrapper.addEventListener('mouseenter', stopAutoplay);
  sliderWrapper.addEventListener('mouseleave', startAutoplay);
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
      stopAutoplay();
  } else {
      startAutoplay();
  }
});


  