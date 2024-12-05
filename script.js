function showDetails(parallel) {
    const detailsContent = document.getElementById("details-content");
    const details = {
        heart: "Le coeur de l'océan, comme celui de l'humain, permet la circulation vitale : les courants marins transportent chaleur et nutriments.",
        lungs: "Les poumons de l'océan, représentés par le phytoplancton, échangent gaz et oxygène, maintenant la vie sur Terre.",
        plankton: "Le plancton dans l'océan agit comme les cellules du corps : une base essentielle pour le fonctionnement global."
    };
    detailsContent.textContent = details[parallel] || "Sélectionnez un parallèle pour plus d'informations.";
}
