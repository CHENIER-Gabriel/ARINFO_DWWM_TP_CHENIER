const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Vérifie que le bouton "Scroll to Top" existe
if (scrollToTopBtn) {
    // Affiche ou masque le bouton lorsque l'utilisateur fait défiler vers le bas
    window.addEventListener('scroll', function() {
        // Si le défilement vertical est supérieur à 100 pixels, afficher le bouton
        if (window.scrollY > 100) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    }, { passive: true }); // Marque l'écouteur de défilement comme passif pour des performances optimisées

    // Gère le clic sur le bouton pour remonter en haut de la page
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 60,            // Position en haut de la page
            behavior: 'smooth' // Défilement fluide
        });
    });
}