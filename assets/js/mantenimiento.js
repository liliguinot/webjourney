document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los checkboxes
    const checkboxes = document.querySelectorAll('.tasks input[type="checkbox"]');
    const webImage = document.querySelector('.water-lap');  // La primera imagen
      
    // Crear el elemento de audio en JavaScript
    const completionSound = new Audio('assets/media/completion-sound.mp3');
  
    // Definir las imágenes correspondientes a cada checkbox
    const images = [
      "assets/media/webjourney-mantenimiento-2.png",       // Imagen para el primer checkbox (Backup inicial)
      "assets/media/webjourney-mantenimiento-3.png", // Imagen para el segundo checkbox (Actualización de plugins)
      "assets/media/webjourney-mantenimiento-4.png",   // Imagen para el tercer checkbox (Actualización de temas)
      "assets/media/webjourney-mantenimiento-5.png",      // Imagen para el cuarto checkbox (Actualización de WP)
      "assets/media/webjourney-mantenimiento-6.png",         // Imagen para el quinto checkbox (Comprobación de enlaces rotos)
      "assets/media/webjourney-mantenimiento-7.png",      // Imagen para el sexto checkbox (Testeo de formularios)
      "assets/media/webjourney-mantenimiento-8.png",         // Imagen para el séptimo checkbox (Vaciado de caché)
      "assets/media/webjourney-mantenimiento-9.png", // Imagen para el octavo checkbox (Comprobación de indexación)
      "assets/media/webjourney-mantenimiento-10.png"           // Imagen para el noveno checkbox (Backup final)
    ];
  
    // Función para comprobar si todos los checkboxes están seleccionados
    function checkAllSelected() {
      return Array.from(checkboxes).every(checkbox => checkbox.checked);
    }
  
    checkboxes.forEach((checkbox, index) => {
      checkbox.addEventListener('click', function() {
        // Si el checkbox está marcado, cambia la imagen
        if (checkbox.checked) {
          webImage.src = images[index];  // Cambia la imagen correspondiente
        } else {
          // Si se desmarca, vuelve a la imagen inicial
          webImage.src = "assets/media/webjourney-mantenimiento-1.png";
        }
  
        // Verificar si todos los checkboxes están seleccionados
        if (checkAllSelected()) {
          // Reproducir el sonido
          completionSound.play();
          
          // Cambiar la clase del círculo
          const circle = document.querySelector('.small-circle');
          circle.classList.remove('red-circle');
          circle.classList.add('green-circle');
        }
      });
    });
  });
  