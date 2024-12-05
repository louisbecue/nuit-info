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
