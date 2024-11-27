// Audios y sus respectivos selectores
const audios = [
    { audio: new Audio('assets/media/seed-audio.mp3'), play: '.play-icon-seed', pause: '.pause-icon-seed', stop: '.stop-icon-seed' },
    { audio: new Audio('assets/media/root-audio.mp3'), play: '.play-icon-root', pause: '.pause-icon-root', stop: '.stop-icon-root' },
    { audio: new Audio('assets/media/design-audio.mp3'), play: '.play-icon-design', pause: '.pause-icon-design', stop: '.stop-icon-design' },
    { audio: new Audio('assets/media/web-audio.mp3'), play: '.play-icon-web', pause: '.pause-icon-web', stop: '.stop-icon-web' },
    { audio: new Audio('assets/media/water-audio.mp3'), play: '.play-icon-water', pause: '.pause-icon-water', stop: '.stop-icon-water' }
];

// Función para gestionar cada audio
audios.forEach(({ audio, play, pause, stop }) => {
    const playIcon = document.querySelector(play);
    const pauseIcon = document.querySelector(pause);
    const stopIcon = document.querySelector(stop);

    // Play
    playIcon.addEventListener('click', () => {
        audio.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline';
    });

    // Pause
    pauseIcon.addEventListener('click', () => {
        audio.pause();
        playIcon.style.display = 'inline';
        pauseIcon.style.display = 'none';
    });

    // Stop
    stopIcon.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0;
        playIcon.style.display = 'inline';
        pauseIcon.style.display = 'none';
    });

    // Reset icons at the end of the audio
    audio.addEventListener('ended', () => {
        playIcon.style.display = 'inline';
        pauseIcon.style.display = 'none';
    });
});
