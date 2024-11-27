// Testimonios

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
          opacity: 0.9,         
          y: 0,               
          duration: 1,        
          stagger: 0.5,       
          ease: "power2.out"  
        });
      },
      once: true  // La animación solo ocurre una vez, no se repite al hacer scroll
    });
  });

// Flores

window.addEventListener("load", () => {
  // Selecciona las flores con las clases .flor-1 y .flor-2
  const flores = document.querySelectorAll(".flor-1, .flor-2");

  // Configura la animación con ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Crea la animación cuando .web-wrap esté en el centro de la pantalla
  ScrollTrigger.create({
    trigger: ".web-wrap",
    start: "center center",  // Activa cuando el centro del trigger esté en el centro de la pantalla
    onEnter: () => {
      // Animación de pulso para las flores
      gsap.fromTo(flores, {
        opacity: 0,          // Comienzan invisibles
        scale: 0             // Empiezan en tamaño cero
      }, {
        opacity: 1,          // Se vuelven visibles
        scale: 1.5,          // Crecen hasta 1.5
        rotation: 15,        // Rotan ligeramente 15 grados
        duration: 1,         // Duración de la primera fase
        ease: "power3.out",
        onComplete: () => {
          // Segunda fase: Reducción del tamaño
          gsap.to(flores, {
            scale: 0.8,        // Disminuyen de tamaño
            rotation: -5,        // Rotan ligeramente 15 grados
            duration: 0.6,
            ease: "power2.inOut",
            onComplete: () => {
              // Tercera fase: Crecen nuevamente
              gsap.to(flores, {
                scale: 1.3,     // Crecen de nuevo ligeramente
                rotation: 10,        // Rotan ligeramente 15 grados
                duration: 0.6,
                ease: "power2.inOut",
                onComplete: () => {
                  // Cuarta fase: Vuelven a su tamaño original
                  gsap.to(flores, {
                    scale: 1,
                    rotation: 0, // Vuelven a la rotación inicial
                    duration: 0.8,
                    ease: "elastic.out(1, 0.3)"
                  });
                }
              });
            }
          });
        }
      });
    },
    once: true  // La animación solo ocurre una vez, no se repite al hacer scroll
  });
});



  
  