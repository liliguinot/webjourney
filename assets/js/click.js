// REGADERA WIREFRAMES-DISEÑO

// Variable para controlar el estado actual (crecimiento o raíces)
let isGrowth = false; // Estado inicial: raíces

// Evento de clic para alternar entre los estados
document.getElementById('regadera-trigger').addEventListener('click', function () {
    const rootSection = document.querySelector('#raices, #crecimiento'); // Modificado para seleccionar cualquiera de los dos IDs
    
    if (isGrowth) {
        // Volver a raíces
        document.getElementById('root-subtitle').innerText = 'Fase 03/A. Estructura Web';
        document.getElementById('root-description').innerText = 'En la tercera fase trabajamos en el diseño del sitio web. El primer paso es estructurar la información y el flujo de navegación a través de esquemas en blanco y negro, llamados de forma técnica "wireframes", que sirven como esqueleto del proyecto, para identificar todas las secciones y contenido que lo formarán. Haz clic en la regadera para descubrir la segunda parte de esta fase.';

        // Restaurar las imágenes originales
        document.querySelector('.root-lap').src = 'assets/media/webjourney-wireframes-mockup.png';
        document.querySelector('.young-plant-1').src = 'assets/media/webjourney-hoja-joven-1.png';
        document.querySelector('.young-plant-2').src = 'assets/media/webjourney-hoja-joven-2.png';

        // Eliminar transformaciones en las imágenes
        document.querySelector('.young-plant-1').classList.remove('young-plant-1-transformed');
        document.querySelector('.young-plant-2').classList.remove('young-plant-2-transformed');

        // Cambiar el texto del cursor
        cursor.textContent = '¡Haz clic en la regadera para regar tu proyecto!';
    } else {
        // Cambiar a crecimiento
        document.getElementById('root-subtitle').innerText = 'Fase 03/B. Diseño Web';
        document.getElementById('root-description').innerText = 'Llega el momento de diseñar el sitio web. En primer lugar, definimos su apariencia. Cuando tengamos claro cómo se usarán las fuentes, la paleta de colores y los diferentes elementos gráficos, diseñamos y prototipamos todas las páginas. Finalmente, adaptamos el diseño a diferentes dispositivos.';

        // Cambiar las imágenes
        document.querySelector('.root-lap').src = 'assets/media/webjourney-diseno-mockup.png';
        document.querySelector('.young-plant-1').src = 'assets/media/webjourney-hoja-vieja-1.png';
        document.querySelector('.young-plant-2').src = 'assets/media/webjourney-hoja-vieja-2.png';

        // Aplicar transform a las imágenes
        document.querySelector('.young-plant-1').classList.add('young-plant-1-transformed');
        document.querySelector('.young-plant-2').classList.add('young-plant-2-transformed');

        // Cambiar el texto del cursor
        cursor.textContent = 'Vuelve a regar para cambiar entre subfases.';
    }

    // Actualizar el menú activo manualmente
    updateActiveMenuItem(isGrowth ? 'raices' : 'crecimiento');
    
    // Alternar el estado
    isGrowth = !isGrowth;
});


// TESTIMONIOS

// Espera hasta que la ventana esté cargada
window.addEventListener("load", () => {
    // Selecciona todos los testimonios
    const testimonios = document.querySelectorAll(".testimonios .testimonial-wrap");
  
    // Configura la animación con ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
  
    // Aplica la animación cuando .web-wrap esté en el centro de la pantalla
    ScrollTrigger.create({
      trigger: ".web-wrap",
      start: "center center",  // Activa cuando el centro del trigger esté en el centro de la pantalla
      onEnter: () => {
        // Aplica la animación a los testimonios cuando el trigger esté en el centro
        gsap.to(testimonios, {
          opacity: 1,         // Aparece con opacidad 1 (visible)
          y: 0,               // Vuelve a su posición original
          duration: 1,        // Duración de la animación
          stagger: 0.5,       // Aparece cada testimonio con 0.5s de diferencia
          ease: "power2.out"  // Tipo de easing para suavizar la animación
        });
      },
      once: true  // La animación solo ocurre una vez, no se repite al hacer scroll
    });

// RELOJ

    const clickSound = new Audio('assets/media/click-sound.mp3');
    const MensError = document.querySelector(".mensaje-error");
    const RegError = document.querySelector(".regadera-2");
  
    document.getElementById('watch-trigger').addEventListener('click', function() {
      clickSound.play();
      clickSound.loop = false;
  
      // Cambiar las imágenes al hacer clic en el reloj
      document.querySelector('.old-plant-1').src = 'assets/media/webjourney-hoja-naranja-1.png'; 
      document.querySelector('.old-plant-2').src = 'assets/media/webjourney-hoja-naranja-2.png'; 
      document.querySelector('.web-lap').src = 'assets/media/webjourney-error-mockup.png'; 
  
      document.querySelector(".small-circle").classList.remove('green-circle'); 
      document.querySelector(".small-circle").classList.add('red-circle'); 
  
      gsap.to(testimonios, {
          autoAlpha: 0,
          y: 20,
          duration: 0.3,
          stagger: 0.1,
          ease: "power2.in",
          onComplete: () => {
              document.querySelector(".testimonios").style.display = "none";
              document.querySelector(".testimonial-wrap").style.display = "none";
              document.querySelector(".watch-wrap").style.display = "none";
              document.querySelector(".flor-1").style.display = "none";
              document.querySelector(".flor-2").style.display = "none";
          }
      });
  
      gsap.to(MensError, {
          opacity: 0.9,
          duration: 0.3,
          ease: "power2.in"
      });
  
      const regaderaWrap = document.querySelector('.regadera-wrap-2');
      if (regaderaWrap) {
          regaderaWrap.classList.remove('hide');
          gsap.to(RegError, {
              opacity: 1,
              duration: 0.3,
              ease: "power2.in"
          });
      }
  
      // Cambiar el texto del cursor solo al hacer clic en el reloj
      cursor.textContent = 'Sigue regando tu web';
  });
  });
  
// REGADERA ERROR - ANCLA A RIEGO
document.querySelector('.regadera-wrap-2').addEventListener('click', function() {
    // Obtener la sección objetivo
    const riegoSection = document.getElementById('riego');
    
    // Realizar el scroll suave hacia la sección
    riegoSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
});
  
