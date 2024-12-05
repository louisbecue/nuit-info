function showDetails(parallel) {
    const detailsContent = document.getElementById("details-content");
    const details = {
        heart: "Le coeur de l'océan, comme celui de l'humain, permet la circulation vitale : les courants marins transportent chaleur et nutriments.",
        lungs: "Les poumons de l'océan, représentés par le phytoplancton, échangent gaz et oxygène, maintenant la vie sur Terre.",
        plankton: "Le plancton dans l'océan agit comme les cellules du corps : une base essentielle pour le fonctionnement global."
    };
    detailsContent.textContent = details[parallel] || "Sélectionnez un parallèle pour plus d'informations.";
}

// Ajouter l'effet de déplacement au bouton quand la souris passe dessus
const button = document.getElementById("impractical-button");
button.addEventListener("mouseover", () => {
    const container = document.getElementById("container");
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const randomX = Math.random() * (containerWidth - button.offsetWidth);
    const randomY = Math.random() * (containerHeight - button.offsetHeight);

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});

function showCaptcha(parallel) {
    const captchaContainer = document.getElementById("captcha-container");
    const captchaOverlay = document.getElementById("captcha-overlay");
    const movingButton = document.getElementById("captcha-move-button");
    const tauntText = document.getElementById("captcha-taunt");

    const tauntMessages = [
        "C'est dur, hein ? 😏",
        "Tu crois pouvoir cliquer ? Bonne chance !",
        "Allez, encore un petit effort... ou pas.",
        "Le bouton est plus rapide que toi !",
        "Tu abandonnes déjà ?",
        "Essaye encore... mais tu n'y arriveras pas !"
    ];

    // Afficher le CAPTCHA et la superposition
    captchaContainer.style.display = "block";
    captchaOverlay.style.display = "block";

    // Réinitialiser la position du bouton
    movingButton.style.left = "50%";
    movingButton.style.top = "50%";

    // Déplacement aléatoire lorsque la souris s'approche
    movingButton.onmouseover = () => {
        const containerWidth = captchaContainer.offsetWidth;
        const containerHeight = captchaContainer.offsetHeight;

        const randomX = Math.random() * (containerWidth - movingButton.offsetWidth);
        const randomY = Math.random() * (containerHeight - movingButton.offsetHeight);

        movingButton.style.left = `${randomX}px`;
        movingButton.style.top = `${randomY}px`;
    };

    // Vérification quand le bouton est cliqué
    movingButton.onclick = () => {
        alert("CAPTCHA réussi !");
        clearInterval(tauntInterval); // Stopper les phrases narquoises
        captchaContainer.style.display = "none";
        captchaOverlay.style.display = "none"; // Masquer la superposition
        showDetails(parallel); // Afficher les détails après réussite
    };

    // Changer les phrases narquoises toutes les 5-6 secondes
    const tauntInterval = setInterval(() => {
        const randomTaunt = tauntMessages[Math.floor(Math.random() * tauntMessages.length)];
        tauntText.textContent = randomTaunt;
    }, 5000);
}

// Fermer le CAPTCHA si on clique en dehors
document.getElementById("captcha-overlay").onclick = () => {
    document.getElementById("captcha-container").style.display = "none";
    document.getElementById("captcha-overlay").style.display = "none";
};




