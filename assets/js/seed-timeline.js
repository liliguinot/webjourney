class Timeline {
    constructor() {
        this.circles = document.querySelectorAll('.timeline-circle');
        this.descriptions = document.querySelectorAll('.timeline-description');
        this.images = document.querySelectorAll('.mask-circle img'); // Selecciona todas las imágenes dentro de .mask-circle
        this.timelineLine = document.querySelector('.timeline-line'); // Selecciona la línea de la timeline

        if (this.circles.length && this.descriptions.length && this.images.length && this.timelineLine) {
            this.init();
        } else {
            console.error("No se encontraron los elementos necesarios.");
        }
    }

    init() {
        this.circles.forEach((circle, index) => {
            circle.setAttribute('data-index', index); // Asegura que cada círculo tenga un índice.
            circle.addEventListener('click', (e) => this.handleClick(e));
        });
    }

    handleClick(event) {
        const circle = event.currentTarget;
        const index = parseInt(circle.dataset.index, 10);
        const isLastCircle = index === this.circles.length - 1; // Verifica si es el último círculo
        const isActive = circle.classList.contains('active'); // Comprueba si el círculo está activo

        // Asigna diferentes imágenes a cada imagen en .mask-circle
        this.images.forEach((image, i) => {
            const newImageSrc = circle.getAttribute(`data-image${i + 1}`); // Obtiene la ruta de data-image1, data-image2, etc.
            if (newImageSrc) {
                image.src = newImageSrc; // Cambia la fuente de cada imagen
            }
        });

        // Alternar estado activo de la descripción correspondiente
        if (this.descriptions[index]) {
            circle.classList.toggle('active');
            this.descriptions[index].classList.toggle('active');

            // Cierra otros elementos
            this.circles.forEach((c, i) => {
                if (i !== index) {
                    c.classList.remove('active');
                    this.descriptions[i]?.classList.remove('active');
                }
            });

            // Cambia la clase de la línea dependiendo si es el último círculo y su estado activo
            if (isLastCircle) {
                if (isActive) {
                    // Si el último círculo estaba activo y ahora está cerrado, volvemos a la clase .timeline-line
                    this.timelineLine.classList.remove('timeline-line-last');
                    this.timelineLine.classList.add('timeline-line');
                } else {
                    // Si el último círculo se activa, usamos la clase .timeline-line-last
                    this.timelineLine.classList.add('timeline-line-last');
                    this.timelineLine.classList.remove('timeline-line');
                }
            } else {
                // Si no es el último círculo, usa la clase .timeline-line normal
                this.timelineLine.classList.remove('timeline-line-last');
                this.timelineLine.classList.add('timeline-line');
            }
        } else {
            console.error(`No se encontró una descripción para el índice ${index}`);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Timeline();
});




