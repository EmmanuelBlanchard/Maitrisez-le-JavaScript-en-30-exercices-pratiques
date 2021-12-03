var readline = require('readline-sync');

var tableau = [3,5,10,12];

function afficherMenu() {
    var texte = "1/ Ajouter un chiffre \n";
    texte += "2/ Afficher le tableau \n";
    texte += "9/ Quitter \n";
    console.log(texte);
}

var choixMenu = 0;

while(choixMenu !== 9) {
    afficherMenu();
    var choixMenu = parseInt(readline.question("Quel est votre choix ? "));
    switch(choixMenu) {
        case 1 : definirChiffre();
        break;
        case 2 : afficherTableau();
        break;
        case 9 : console.log("A bientôt");
        break;
        default : console.log("Cas inconnu");
        break;
    }
}


function definirChiffre() {
    chiffre = parseInt(readline.question("Quel chiffre voulez vous ajouter ? "));
    var positionToPush = obtenirLaPosition(tableau,chiffre);
    tableau.splice(positionToPush,0,chiffre);
}

function obtenirLaPosition(tableau,chiffre) {
    for(var i = 0 ; i < tableau.length ; i++) {
        if(tableau[i] > chiffre) {
            return i;
        }
    }
    return tableau.length;
}

function afficherTableau(){
    console.log(tableau);
}
