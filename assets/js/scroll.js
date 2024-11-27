// Registrar ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Seleccionar las secciones y elementos
const seedContent = document.querySelectorAll(".seed-content, .seed-title");
const rootContent = document.querySelectorAll(".tool-content, .tool-title");
const designContent = document.querySelectorAll(".root-content, .root-title");
const webContent = document.querySelectorAll(".web-content, .web-title");
const waterContent = document.querySelectorAll(".water-content, .water-title");
const circle = document.querySelector(".small-circle");

function initAnimations() {
// Fade in semilla
gsap.from(seedContent, {
    yPercent: -20,
    autoAlpha: 0,
    duration: 1,
    ease: 'back.out',
    scrollTrigger: {
        trigger: seedContent,
        start: "top bottom",
        end: "top top",
        scrub: false,
        once: true,
    }
});

// Fade in raíces (previamente herramientas)
gsap.from(rootContent, {
    yPercent: -20,
    autoAlpha: 0,
    duration: 1,
    ease: 'back.out',
    scrollTrigger: {
        trigger: rootContent,
        start: "top bottom",
        end: "top top",
        scrub: false,
        once: true,
    }
});

// Fade in crecimiento (wirefraes + diseño)
gsap.from(designContent, {
    yPercent: -20,
    autoAlpha: 0,
    duration: 1,
    ease: 'back.out',
    scrollTrigger: {
        trigger: designContent,
        start: "top bottom",
        end: "top top",
        scrub: false,
        once: true,
    }
});

// Fade in floración (web)
gsap.from(webContent, {
    yPercent: -20,
    autoAlpha: 0,
    duration: 1,
    ease: 'back.out',
    scrollTrigger: {
        trigger: webContent,
        start: "top bottom",
        end: "top top",
        scrub: false,
        once: true,
    }
});

// Fade in riego (mantenimiento)
gsap.from(waterContent, {
    yPercent: -20,
    autoAlpha: 0,
    duration: 1,
    ease: 'back.out',
    scrollTrigger: {
        trigger: waterContent,
        start: "top bottom",
        end: "top top",
        scrub: false,
        once: true,
    }
});

    // Animación del círculo pequeño 1
    gsap.fromTo(
        circle,
        { xPercent: 0, yPercent: 0 },
        {
            xPercent: 135,
            yPercent: 0,
            scrollTrigger: {
                trigger: ".scroll-wrap",
                start: "top top+=1px",
                end: "bottom bottom",
                toggleActions: "play none reverse none",
                scrub: 3,
            }
        }
    );
  
    // Animación del círculo pequeño 2
    gsap.fromTo(
      circle,
      { xPercent: 135, yPercent: 0 },
      {
          xPercent: 60,
          yPercent: 0,
          scrollTrigger: {
              trigger: ".scroll-wrap-2",
              start: "=-20%",
              end: "bottom bottom",
              toggleActions: "play none reverse none",
              scrub: 3,
          }
      }
  );

  // Animación del círculo pequeño 3
  gsap.fromTo(
    circle,
    { xPercent: 60, yPercent: 0 },
    {
        xPercent: 135,
        yPercent: 0,
        scrollTrigger: {
            trigger: ".scroll-wrap-3",
            start: "=-100%",
            end: "bottom bottom",
            toggleActions: "play none reverse none",
            scrub: 3,
        }
    }
);

  // El circulo desaparece

gsap.to(circle, {
  scrollTrigger: {
    trigger: "#riego",
    start: "bottom bottom",
    end: "=+3%",
    scrub: 1,
    toggleActions: "play none reverse none",
    onLeave: () => {
      gsap.set(circle, { scale: 0 });
    }
  },
  scale: 0,
  duration: 1,
  ease: "power2.out"
});
}

// Verificar el ancho inicial de la ventana
// if (window.innerWidth >= 1024) {
    initAnimations();
// }

// Ajustar la lógica para el cambio de clase 'green-circle'
gsap.utils.toArray(".web-wrap").forEach((wrap) => {
    ScrollTrigger.create({
        trigger: wrap,
        start: "top center",
        onEnter: () => {
            circle.classList.add('green-circle');
        },
        onLeaveBack: () => {
            circle.classList.remove('green-circle');
        },
        onEnterBack: () => {
            circle.classList.add('green-circle');
        },
        onLeave: () => {
            circle.classList.remove('green-circle');
        }
    });
});

window.addEventListener("scroll", () => ScrollTrigger.update());
window.addEventListener("mousedown", () => ScrollTrigger.update());
window.addEventListener("mouseup", () => ScrollTrigger.update());
window.addEventListener("keydown", (event) => {

if (
event.key === "ArrowUp" ||
event.key === "ArrowDown" ||
event.key === "PageUp" ||
event.key === "PageDown" ||
event.key === "Home" ||
event.key === "End"
) {
ScrollTrigger.update();
}
});


