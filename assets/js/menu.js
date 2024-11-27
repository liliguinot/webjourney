// Función para manejar la activación del menú
function updateActiveMenuItem(sectionId) {
  const links = document.querySelectorAll('nav ul li a');
  links.forEach(link => {
    const href = link.getAttribute('href').substring(1);
    if (href === sectionId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Agregar evento de clic a los enlaces del menú
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
  link.addEventListener('click', (event) => {
      const sectionId = event.target.getAttribute('href').substring(1);
      updateActiveMenuItem(sectionId);
  });
});

// Crear ScrollTriggers para cada sección
const sections = ['semilla', 'raices', 'crecimiento', 'floracion', 'riego'];
sections.forEach(section => {
  ScrollTrigger.create({
      trigger: `#${section}`,
      start: "top center",
      end: "bottom center",
      onEnter: () => updateActiveMenuItem(section),
      onEnterBack: () => updateActiveMenuItem(section)
  });
});

// Seleccionar el botón hamburguesa, el menú y los enlaces
const hamburgerBtn = document.querySelector('.hamburger-btn');
const navMenu = document.querySelector('nav');
const menuItems = document.querySelectorAll('nav ul li a');

// Evento para abrir/cerrar el menú y cambiar colores del logo
hamburgerBtn.addEventListener('click', () => {
  // Abrir/cerrar el menú
  navMenu.classList.toggle('active');
  hamburgerBtn.classList.toggle('open');
});

// Evento para cerrar el menú cuando se haga clic en un enlace
menuItems.forEach(Item => {
  Item.addEventListener('click', () => {
    // Cerrar el menú y cambiar el estado del botón hamburguesa
    navMenu.classList.remove('active');
    hamburgerBtn.classList.remove('open');
  });
});

