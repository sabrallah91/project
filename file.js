// Déclaration du tableau contenant la liste des mots proposés à l'utilisateur
const listeMots = ['Cachalot', 'Pétunia', 'Serviette'];
const listePhrases = ['Pas de panique !', 'La vie, l’univers et le reste', 'Merci pour le poisson'];
let score = 0;

// Demandez à l'utilisateur s'il veut la liste de mots ou la liste de phrases
let choixListe;
do {
    choixListe = prompt("Voulez-vous jouer avec la liste de mots ou la liste de phrases ? (mots/phrases)");
} while (choixListe !== "mots" && choixListe !== "phrases");

// Lancez votre boucle for, avec la liste que l'utilisateur a choisie
if (choixListe === "mots") {
    for (let i = 0; i < listeMots.length; i++) {
        let motUtilisateur = prompt("Entrez le mot : " + listeMots[i]);
        if (motUtilisateur === listeMots[i]) {
            score++;
        }
    }
} else {
    for (let i = 0; i < listePhrases.length; i++) {
        let phraseUtilisateur = prompt("Entrez la phrase : " + listePhrases[i]);
        if (phraseUtilisateur === listePhrases[i]) {
            score++;
        }
    }
}

// Affichage du score de l'utilisateur
console.log("Votre score est de " + score + " sur " + (choixListe === "mots" ? listeMots.length : listePhrases.length));
