document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.carousel-track');
    const leftButton = document.querySelector('.leftbutton');
    const rightButton = document.querySelector('.rightbutton');
    const scrollAmount = 300; // Quantité de défilement en pixels

    // Défilement à droite
    rightButton.addEventListener('click', () => {
        carouselTrack.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    // Défilement à gauche
    leftButton.addEventListener('click', () => {
        carouselTrack.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
});

