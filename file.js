// Étape 1 : Testez le premier mot
let listeMots = ["Cachalot", "Pétunia", "Serviette"];
let score = 0;

let premierMot = prompt("Entrez le premier mot :" + listeMots[0]);
if (premierMot === listeMots[0]) {
    score++;
}

console.log("Score final :", score);

// Étape 2 : Testez le second mot
let deuxiemeMot = prompt("Entrez le second mot :", listeMots[1]);
if (deuxiemeMot === listeMots[1]) {
    score++;
}

console.log("Score final :", score);

// Étape 3 : Testez le troisième mot
let troisiemeMot = prompt("Entrez le troisième mot :" + listeMots[2]);
if (troisiemeMot === listeMots[2]) {
    score++;
}

console.log("Score final :", score);
