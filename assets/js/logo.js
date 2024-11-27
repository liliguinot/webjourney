// Selecciona el logo y el texto del logo
const logo = document.querySelector('.logo');
const logoText = document.querySelector('.logo-text');

// Crea la animación con GSAP
const animation = gsap.to(logoText, {
  xPercent: -50, // Mueve el texto hacia la izquierda para mostrar la parte final
  duration: 2,
  ease: 'none',
  repeat: -1, // Repetir indefinidamente
  yoyo: true, // Para que la animación vuelva al inicio
});

// Pausa la animación por defecto
animation.pause();

// Reanuda la animación al hacer hover
logo.addEventListener('mouseenter', () => animation.play());

// Resetea la animación al estado inicial al salir del hover
logo.addEventListener('mouseleave', () => {
    animation.pause();
    animation.seek(0); // Volver al inicio de la animación
  });
