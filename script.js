// Variable pour suivre si un défilement aléatoire est en cours
let isScrollingRandomly = false;

// Fonction pour appliquer un défilement aléatoire
function randomScroll(event) {
    // Si un défilement aléatoire est déjà en cours, on ne fait rien
    if (isScrollingRandomly) {
        return;
    }

    // Marquer que nous commençons un défilement aléatoire
    isScrollingRandomly = true;

    // Obtenir la hauteur totale du document et la hauteur de la fenêtre
    const docHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    // Déterminer une position aléatoire dans la page (en tenant compte de la hauteur de la fenêtre)
    const randomPosition = Math.random() * (docHeight - windowHeight); // éviter de dépasser la fin de la page

    // Déplacer la page vers la position aléatoire
    window.scrollTo(0, randomPosition);

    // Empêcher le comportement de défilement par défaut pour cette action
    event.preventDefault();

    // Réinitialiser la variable après un délai pour permettre au comportement de défilement naturel de reprendre
    setTimeout(() => {
        isScrollingRandomly = false;
    }, 200); // Durée du délai (200ms ici, peut être ajustée)
}

// Écouteur pour la molette de la souris (défilement via molette)
window.addEventListener('wheel', function(event) {
    randomScroll(event);
}, { passive: false }); // Empêcher le comportement natif du défilement

// Écouteur pour la barre de défilement
window.addEventListener('scroll', function(event) {
    randomScroll(event);
}, { passive: false }); // Empêcher le comportement natif du défilement

// Fonction pour afficher les détails du parallèle
function showDetails(parallel) {
    const detailsContent = document.getElementById("details-content");
    const details = {
        heart: "Le coeur de l'océan, comme celui de l'humain, permet la circulation vitale : les courants marins transportent chaleur et nutriments.",
        lungs: "Les poumons de l'océan, représentés par le phytoplancton, échangent gaz et oxygène, maintenant la vie sur Terre.",
        plankton: "Le plancton dans l'océan agit comme les cellules du corps : une base essentielle pour le fonctionnement global."
    };
    detailsContent.textContent = details[parallel] || "Sélectionnez un parallèle pour plus d'informations.";
}

// Récupérer l'élément du logo
const logo = document.getElementById("random-logo");

// Taille du logo (ajuster selon la taille réelle du logo)
const logoWidth = 50;  // Largeur du logo
const logoHeight = 50; // Hauteur du logo

// Fonction pour positionner le logo de manière aléatoire et s'assurer qu'il reste visible
function positionRandomLogo() {
    const bodyWidth = document.body.offsetWidth;
    const bodyHeight = document.body.offsetHeight;

    // Calculer la position aléatoire en veillant à ce que le logo reste dans la fenêtre visible
    let randomX = Math.random() * (bodyWidth - logoWidth);  // La largeur de la page moins celle du logo
    let randomY = Math.random() * (bodyHeight - logoHeight);  // La hauteur de la page moins celle du logo

    // Appliquer la position au logo sans transition si le logo est hors de la vue
    const logoRect = logo.getBoundingClientRect();

    // Si le logo est hors de la vue, on le déplace directement sans transition
    if (logoRect.top < 0 || logoRect.bottom > window.innerHeight || logoRect.left < 0 || logoRect.right > window.innerWidth) {
        logo.style.transition = 'none';  // Désactiver la transition
        logo.style.left = `${randomX}px`;
        logo.style.top = `${randomY}px`;

        // Réactiver la transition après un délai de 0ms (juste après le changement de position)
        setTimeout(() => {
            logo.style.transition = 'all 1s ease-in-out';  // Réactiver la transition
        }, 0);
    } else {
        // Si le logo est visible, on applique la transition
        logo.style.left = `${randomX}px`;
        logo.style.top = `${randomY}px`;
    }
}

// Détecter le clic sur le logo pour déclencher l'animation et repositionner le logo
logo.addEventListener('click', function() {
    // Ajouter la classe "clicked" pour activer l'animation
    logo.classList.add('clicked');

    // Réinitialiser l'animation après 1.5s (la durée de l'animation)
    setTimeout(() => {
        logo.classList.remove('clicked');
    }, 1500);

    // Repositionner le logo de manière aléatoire après un clic
    positionRandomLogo();
});

// Appeler la fonction pour positionner le logo de manière aléatoire à chaque fois que la page se charge
positionRandomLogo();

// Vérifier si le logo est visible et repositionner s'il est hors de la vue
window.addEventListener('scroll', function() {
    const logoRect = logo.getBoundingClientRect();

    // Si le logo est partiellement hors de l'écran, repositionner aléatoirement
    if (logoRect.top < 0 || logoRect.bottom > window.innerHeight || logoRect.left < 0 || logoRect.right > window.innerWidth) {
        positionRandomLogo();
    }
});

// Fonction pour vérifier si le logo est visible dans la fenêtre
function ensureLogoVisible() {
    const logoRect = logo.getBoundingClientRect();
    const logoIsVisible = logoRect.top >= 0 && logoRect.bottom <= window.innerHeight && logoRect.left >= 0 && logoRect.right <= window.innerWidth;

    // Si le logo est hors de l'écran, on le repositionne sans transition
    if (!logoIsVisible) {
        positionRandomLogo();
    }
}

// Vérification périodique pour s'assurer que le logo reste visible
setInterval(ensureLogoVisible, 100);  // Vérifier toutes les 100ms




