var readline = require('readline-sync');

function afficherMenu() {
    var texte = "1/ Créer un cercle \n";
    texte += "2/ Afficher le périmètre du cercle \n";
    texte += "3/ Afficher la surface du cercle \n";
    texte += "9/ Quitter \n";
    console.log(texte);
}

var choixMenu = 0;
var rayon = 0;

while(choixMenu !== 9) {
    afficherMenu();
    var choixMenu = parseInt(readline.question("Quel est votre choix ? "));
    switch(choixMenu) {
        case 1 : definirRayon();
        break;
        case 2 : afficherPerimetreCercle();
        break;
        case 3 : afficherAireCercle();
        break;
        case 9 : console.log("A bientôt");
        break;
        default : console.log("Cas inconnu");
        break;
    }
}


function definirRayon() {
    rayon = parseInt(readline.question("Quel rayon voulez vous pour le cercle ? "));
}

function afficherPerimetreCercle() {
    perimetre = 2 * Math.PI * rayon;
    console.log("Le périmètre de rayon " + rayon + " est égal à : " + perimetre);
}

function afficherAireCercle() {
    aire = rayon * rayon * Math.PI;
    console.log("L'aire du cercle de rayon " + rayon + " est égal à : " + aire);
}
