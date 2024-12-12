// Sélection des éléments du DOM
const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu1');
const header = document.querySelector('.containerHeader1');
const closeMenu = document.querySelector('.close-menu');
const contactBtn = document.getElementById('contactBtn');
const contactBtn2 = document.getElementById('contactBtn2');
const contactSection = document.getElementById('contactSection');
// Vérification de l'existence des éléments avant d'ajouter les écouteurs d'événements
if (burgerMenu && menu && header) {
    burgerMenu.addEventListener('click', () => {
        menu.classList.toggle('active'); // Ouvre ou ferme le menu burger
        header.classList.toggle('hidden'); // Cache le header
        coverBackground.classList.toggle('hidden'); // Cache le contenu
        coverBloc.classList.toggle('hidden'); // Cache le contenu
    });
}

if (closeMenu && menu && header) {
    closeMenu.addEventListener('click', () => {
        menu.classList.remove('active'); // Ferme le menu burger
        header.classList.remove('hidden'); // Montre à nouveau le header
        coverBackground.classList.remove('hidden');
        coverBloc.classList.remove('hidden'); // Montre à nouveau le contenu
    });
}

// Ajout des écouteurs d'événements pour les boutons de contact
if (contactBtn && contactSection) {
    contactBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        contactSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
}

if (contactBtn2 && contactSection) {
    contactBtn2.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        contactSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// Fonction pour gérer le redimensionnement de la fenêtre
function handleResize() {
    const isDesktop = window.innerWidth >= 1024; // Exemple: 1024px pour la vue desktop

    if (isDesktop) {
        // Si on est en vue desktop, ferme le menu et montre les éléments masqués
        menu.classList.remove('active');
        header.classList.remove('hidden');
        coverBackground.classList.remove('hidden');
        coverBloc.classList.remove('hidden');
    }
}

// Ajout de l'écouteur d'événement de redimensionnement de la fenêtre
window.addEventListener('resize', handleResize);
