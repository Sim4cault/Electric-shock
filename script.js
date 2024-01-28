// Initialiser le compteur de clics
let clickCount = 0;

// Obtenir l'élément du bouton
const clickButton = document.getElementById('clickButton');

// Obtenir l'élément du compteur de clics
const clickCountDisplay = document.getElementById('clickCount');

// Ajouter un écouteur d'événements de clic au bouton
clickButton.addEventListener('click', () => {
    // Incrémenter le compteur de clics
    clickCount++;

    // Mettre à jour l'affichage du compteur de clics
    clickCountDisplay.textContent = clickCount;
});
