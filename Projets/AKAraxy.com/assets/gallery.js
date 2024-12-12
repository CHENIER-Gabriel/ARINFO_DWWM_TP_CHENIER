// Sélection des éléments de la modale
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("fullSizeImage");
const closeBtn = document.querySelector(".close");

// Ajouter un événement de clic à chaque image dans la galerie
document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex"; // Afficher la modale
        modalImg.src = img.src; // Définir la source de l'image de la modale
        modalImg.alt = img.alt; // Copier le texte alternatif
    });
});

// Fermer la modale en cliquant sur le bouton de fermeture
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fermer la modale en cliquant en dehors de l'image
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});