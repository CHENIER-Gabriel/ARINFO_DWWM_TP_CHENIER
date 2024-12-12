// Sélection des éléments du DOM
const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu1');
const header = document.querySelector('.containerHeader1');
const coverBackground = document.querySelector('.coverbackgroundAKA');
const coverBloc = document.querySelector('.contentbloc1');
const closeMenu = document.querySelector('.close-menu');
const contactBtn = document.getElementById('contactBtn');
const contactBtn2 = document.getElementById('contactBtn2');
const contactSection = document.getElementById('contactSection');

// Vérification de l'existence des éléments avant d'ajouter les écouteurs d'événements
if (burgerMenu && menu && header && coverBackground && coverBloc) {
    burgerMenu.addEventListener('click', () => {
        menu.classList.toggle('active'); // Ouvre ou ferme le menu burger
        header.classList.toggle('hidden'); // Cache le header
        coverBackground.classList.toggle('hidden'); // Cache le contenu
        coverBloc.classList.toggle('hidden'); // Cache le contenu
    });
}

if (closeMenu && menu && header && coverBackground && coverBloc) {
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
