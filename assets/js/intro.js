document.addEventListener('DOMContentLoaded', () => {
    const intro = document.querySelector('.intro');
    const plants = gsap.utils.toArray('.intro-plant');
    
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(intro, {
          opacity: 0,
          duration: 0.5,
          zIndex: -1,
          onComplete: () => intro.classList.add('hidden')
        });
      }
    });
  
    // Animar cada planta secuencialmente, pero solapando las transiciones
    plants.forEach((plant, index) => {
      // Mostrar la imagen actual antes de ocultar la anterior
      tl.to(plant, {
        opacity: 1,
        duration: 0.5,
        ease: 'none'
      }, index > 0 ? `-=${0.1}` : '+=0'); // Solapa 0.1 segundos con la anterior
  
      // Ocultar la imagen anterior después de mostrar la actual
      if (index > 0) {
        tl.to(plants[index - 1], {
          opacity: 0,
          duration: 0.5, // Desvanece rápidamente la imagen anterior
          ease: 'none'
        }, `-=${0.1}`); // Solapa 0.1 segundos con la aparición de la actual
      }
    });
  
    // Pausa al final para la última imagen
    tl.to(plants[plants.length - 1], {
      duration: 0.8
    });
  });
  
  
  