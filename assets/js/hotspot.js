document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggle-hotspots');
    const hotspotsContainer = document.querySelector('.hotspots-container');
    const tipDots = document.querySelectorAll('.tip-dot');
    const mediaQuery = window.matchMedia('(max-width: 1024px)'); // Detecta mobile/tablet

    toggle.addEventListener('change', () => {
        hotspotsContainer.style.display = toggle.checked ? 'block' : 'none';
        if (!toggle.checked) {
            document.querySelectorAll('.tip-wrap').forEach(wrap => {
                wrap.classList.remove('active');
            });
        }
    });

    tipDots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const wrap = e.target.nextElementSibling;
            
            if (mediaQuery.matches) {
                // Versión móvil/tablet: Ocultar otros tips al mostrar uno
                document.querySelectorAll('.tip-wrap').forEach(w => {
                    if (w !== wrap) w.classList.remove('active');
                });
            }
            
            wrap.classList.toggle('active');
        });
    });
});
