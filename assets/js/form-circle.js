gsap.registerPlugin(ScrollTrigger);

const smallCircle = document.querySelector('.small-circle');
const bigCircle = document.querySelector('.collage-circle');

// Obtener la posición y dimensiones del círculo grande
const bigCircleRect = bigCircle.getBoundingClientRect();

// Usar gsap.matchMedia
gsap.matchMedia().add("(min-width: 1025px)", () => {
  // Animación solo en pantallas grandes
  gsap.set(bigCircle, { scale: 0 });

  gsap.to(bigCircle, {
    scrollTrigger: {
      trigger: "#form",
      start: "top center",
      end: "top 20%",
      scrub: 1,
      toggleActions: "play none reverse none"
    },
    scale: 2.5,
    duration: 1,
    ease: "power2.out"
  });
});

// Opcional: Otra animación para pantallas pequeñas
gsap.matchMedia().add("(max-width: 1024px)", () => {
  gsap.set(bigCircle, { scale: 0, yPercent: -20 });

  gsap.to(bigCircle, {
    scrollTrigger: {
      trigger: "#form",
      start: "top center",
      end: "top 20%",
      scrub: 1,
      toggleActions: "play none reverse none"
    },
    scale: 1.9, // Escala más pequeña para móviles
    duration: 1,
    ease: "power2.out"
  });
});