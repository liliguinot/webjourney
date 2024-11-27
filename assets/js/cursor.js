// CURSOR POR DEFECTO

// Crea el elemento del cursor
const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

// Variables para la posición actual y objetivo del cursor
let currentX = 0;
let currentY = 0;
let targetX = 0;
let targetY = 0;

// Factor de suavizado (ajusta entre 0 y 1 para más o menos suavidad)
const smoothing = 0.15;

// Función de animación del cursor
function updateCursor() {
  // Calcula la diferencia entre posición actual y objetivo
  const dx = targetX - currentX;
  const dy = targetY - currentY;
  
  // Actualiza la posición actual con interpolación
  currentX += dx * smoothing;
  currentY += dy * smoothing;
  
  // Aplica la transformación con translate3d para mejor rendimiento
  cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%) scale(1)`;
  
  // Continúa la animación
  requestAnimationFrame(updateCursor);
}

// Actualiza la posición objetivo cuando se mueve el mouse
document.addEventListener("mousemove", (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
});

// Inicia la animación
updateCursor();

const greenCursor = document.querySelectorAll('.green-cursor');

// Cambiar el color del cursor al pasar sobre los elementos
greenCursor.forEach(box => {
  box.addEventListener('mouseenter', () => {
    cursor.style.backgroundColor = 'var(--color-primary)';
    cursor.style.mixBlendMode = 'difference';
    cursor.style.setProperty('--scale', '0.8'); // Usa una variable CSS para la escala
  });
  
  box.addEventListener('mouseleave', () => {
    cursor.style.backgroundColor = 'var(--color-accent)';
    cursor.style.mixBlendMode = 'normal';
    cursor.style.setProperty('--scale', '1');
  });
});

// CURSOR SECCIÓN ROOTS

// Detectar la sección en la que quieres cambiar el cursor
const targetSection = document.querySelector('.design-wrap');
const toggleElements = document.querySelectorAll('.toggle-wrap');
const dotElements = document.querySelectorAll('.tip-dot');
const audioDesign = document.querySelector('.design-audio');

targetSection.addEventListener('mouseenter', () => {
  // Eliminar cualquier estilo inline que pueda estar interfiriendo
  cursor.style.removeProperty('background-color');
  cursor.style.removeProperty('mix-blend-mode');
  
  cursor.classList.add('large-cursor');
  cursor.textContent = '¡Haz clic en la regadera para regar tu proyecto!';
});

targetSection.addEventListener('mouseleave', () => {
  cursor.classList.remove('large-cursor');
  cursor.textContent = '';
  
  // Restaurar el color original
  cursor.style.backgroundColor = 'var(--color-accent)';

// Agregar evento para los elementos .toggle-wrap
toggleElements.forEach(toggle => {
  toggle.addEventListener('mouseenter', () => {
    cursor.classList.remove('large-cursor'); // Eliminar la clase de cursor grande
    cursor.style.backgroundColor = ''; // Restaurar el color de fondo por defecto
    cursor.style.mixBlendMode = ''; // Restaurar el modo de mezcla por defecto
    cursor.textContent = ''; // Eliminar el texto al pasar sobre el enlace
    cursor.classList.add('design-cursor'); // Cambia color del cursor a verde
  });

  toggle.addEventListener('mouseleave', () => {
    cursor.classList.remove('design-cursor'); // Cambia color del cursor a verde
    cursor.classList.add('large-cursor'); // Volver a agregar la clase de cursor grande
    cursor.style.backgroundColor = ''; // Restaurar el color de fondo por defecto
    cursor.style.mixBlendMode = ''; // Restaurar el modo de mezcla por defecto
    cursor.textContent = '¡Haz clic en la regadera para regar tu proyecto!'; // Restaurar el texto
  });
});

  // Agregar evento para los elementos .tip-dot
dotElements.forEach(dot => {
  dot.addEventListener('mouseenter', () => {
    cursor.classList.remove('large-cursor'); // Eliminar la clase de cursor grande
    cursor.style.backgroundColor = ''; // Restaurar el color de fondo por defecto
    cursor.style.mixBlendMode = ''; // Restaurar el modo de mezcla por defecto
    cursor.textContent = ''; // Eliminar el texto al pasar sobre el enlace
    cursor.classList.add('design-cursor'); // Cambia color del cursor a verde
  });

  dot.addEventListener('mouseleave', () => {
    cursor.classList.remove('design-cursor'); // Cambia color del cursor a verde
    cursor.classList.add('large-cursor'); // Volver a agregar la clase de cursor grande
    cursor.style.backgroundColor = ''; // Restaurar el color de fondo por defecto
    cursor.style.mixBlendMode = ''; // Restaurar el modo de mezcla por defecto
    cursor.textContent = '¡Haz clic en la regadera para regar tu proyecto!'; // Restaurar el texto
  });
});

// Agregar evento para los elementos .audio-info
  audioDesign.addEventListener('mouseenter', () => {
    cursor.classList.remove('large-cursor'); // Eliminar la clase de cursor grande
    cursor.style.backgroundColor = ''; // Restaurar el color de fondo por defecto
    cursor.style.mixBlendMode = ''; // Restaurar el modo de mezcla por defecto
    cursor.textContent = ''; // Eliminar el texto al pasar sobre el enlace
    cursor.classList.add('design-cursor'); // Cambia color del cursor a verde
  });

  audioDesign.addEventListener('mouseleave', () => {
    cursor.classList.remove('design-cursor'); // Cambia color del cursor a verde
    cursor.classList.add('large-cursor'); // Volver a agregar la clase de cursor grande
    cursor.style.backgroundColor = ''; // Restaurar el color de fondo por defecto
    cursor.style.mixBlendMode = ''; // Restaurar el modo de mezcla por defecto
    cursor.textContent = '¡Haz clic en la regadera para regar tu proyecto!'; // Restaurar el texto
  });
});


// CURSOR SECCIÓN FLORACIÓN
const formacionSection = document.querySelector('.web-wrap');
const linkElements = formacionSection.querySelectorAll('.link'); // Selecciona los elementos con la clase .link
const watchWrap = document.querySelector('.watch-wrap'); // Selecciona el reloj
const audioWeb = document.querySelector('.web-audio');

formacionSection.addEventListener('mouseenter', () => {
  cursor.style.removeProperty('background-color');
  cursor.style.removeProperty('mix-blend-mode');

  if (getComputedStyle(watchWrap).display === 'none') {
    cursor.textContent = 'Sigue regando tu web';
  } else {
    cursor.textContent = 'Haz clic en el reloj para avanzar el tiempo';
  }

  cursor.classList.add('large-cursor');
});

formacionSection.addEventListener('mouseleave', () => {
  cursor.classList.remove('large-cursor');
  cursor.textContent = '';

  // Restaurar el color original
  cursor.style.backgroundColor = 'var(--color-accent)';
});

// Agregar evento para los elementos .link
linkElements.forEach(link => {
  link.addEventListener('mouseenter', () => {
    cursor.classList.remove('large-cursor');
    cursor.style.backgroundColor = '';
    cursor.style.mixBlendMode = '';
    cursor.textContent = '';
    cursor.classList.add('design-cursor');
  });

  link.addEventListener('mouseleave', () => {
    cursor.classList.remove('design-cursor');
    cursor.classList.add('large-cursor');

    if (getComputedStyle(watchWrap).display === 'none') {
      cursor.textContent = 'Sigue regando tu web';
    } else {
      cursor.textContent = 'Haz clic en el reloj para avanzar el tiempo';
    }
  });
});

// Agregar evento para los elementos .audio-info

  audioWeb.addEventListener('mouseenter', () => {
    cursor.classList.remove('large-cursor'); // Eliminar la clase de cursor grande
    cursor.style.backgroundColor = ''; // Restaurar el color de fondo por defecto
    cursor.style.mixBlendMode = ''; // Restaurar el modo de mezcla por defecto
    cursor.textContent = ''; // Eliminar el texto al pasar sobre el enlace
    cursor.classList.add('design-cursor'); // Cambia color del cursor a verde
  });

  audioWeb.addEventListener('mouseleave', () => {
    cursor.classList.remove('design-cursor'); // Cambia color del cursor a verde
    cursor.classList.add('large-cursor'); // Volver a agregar la clase de cursor grande
    cursor.style.backgroundColor = ''; // Restaurar el color de fondo por defecto
    cursor.style.mixBlendMode = ''; // Restaurar el modo de mezcla por defecto
    cursor.textContent = 'Haz clic en el reloj para avanzar el tiempo'; // Restaurar el texto
  });
