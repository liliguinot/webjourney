// Seleccionar el iframe
const iframe = document.getElementById('loom-video');

// Función para enviar comandos al iframe de Loom
function sendCommandToLoom(command, value) {
  iframe.contentWindow.postMessage({ method: command, value: value }, '*');
}

// Crear el IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Cuando el iframe entra en la vista, agregamos los parámetros de autoplay y muted
      const iframeSrc = iframe.src;
      iframe.src = `${iframeSrc}&autoplay=true&muted=true`;
      
      // Esperar un momento para que el video cargue y luego cambiar la velocidad
      setTimeout(() => {
        sendCommandToLoom('setPlaybackRate', 2); // Cambiar la velocidad a 2x (máxima comúnmente permitida)
      }, 1000); // 1000ms para dar tiempo al video a cargarse

      observer.unobserve(entry.target); // Detener la observación después de que el video se reproduce
    }
  });
}, {
  threshold: 0.5 // Se activará cuando al menos el 50% del iframe esté visible
});

// Comenzar a observar el iframe
observer.observe(iframe);



// POP UP

// Selección de elementos
const mostrarVideo = document.getElementById('mostrar-video');
const floracionVideo = document.getElementById('floracion-video');
const overlay = document.getElementById('overlay');

// Función para mostrar el popup y overlay
mostrarVideo.addEventListener('click', function(e) {
  e.preventDefault(); // Evita que el enlace recargue la página
  floracionVideo.style.display = 'flex'; // Usa 'flex' para centrar contenido
  overlay.style.display = 'block';
});

// Función para ocultar el popup y overlay
function ocultarPopup() {
  floracionVideo.style.display = 'none';
  overlay.style.display = 'none';
}

// Cerrar al hacer clic en el overlay
overlay.addEventListener('click', function() {
  ocultarPopup(); // Llama a la función para ocultar el popup
});



