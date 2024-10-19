// Array of anime character names (same order as images)
const characterNames = [
    "Gojo Satoru",
    "Suguru Geto",
    "Sukuna",
    "Goku",
    "Giyu Tomioka",
    "Inosuke Hashibira",
    "Kento Nanami",
    "Tanjiro Kamado",
    "Megumi Fushiguro",
    "Yuji Itadori",
    "Roronoa Zoro",
    "Vegeta",
    "Kyojuro Rengoku"
];

// Function to reveal the character image and name
function revealCharacter(index) {
    // Get the image element by ID
    const imgElement = document.getElementById(`char-${index}`);
    // Add the 'revealed' class to remove the filter effect (based on your chosen filter)
    imgElement.classList.add('revealed');

    // Get the paragraph element by ID and set the character name
    const nameElement = document.getElementById(`name-${index}`);
    nameElement.textContent = characterNames[index];
}
