var readline = require('readline-sync');

function afficherMenu() {
    var texte = "Saisir l'action a realiser : \n";
    texte += "1/ Addition des n premiers nombres \n";
    texte += "2/ Multiplication des n premiers nombres \n";
    texte += "9/ Quitter";
    console.log(texte);
}

var choixMenu = 0;
var nombreSaisie = 0;
var nombreSaisie2 = 0;

while(choixMenu !== 9) {
    afficherMenu();
    var choixMenu = parseInt(readline.question(""));
    switch(choixMenu) {
        case 1 : afficherNPremiersNombres();
        break;
        case 2 : multiplicationDesNPremiersNombres();
        break;
        case 9 : console.log("A bientôt");
        break;
        default : console.log("Cas inconnu");
        break;
    }
}

function afficherNPremiersNombres() {
    nombreSaisie = parseInt(readline.question("Combien de nombres ? "));
    var cumulAddition = 0;
    for(var i = 1 ; i <= nombreSaisie ; i++) {
        cumulAddition += i;
        var texte = "";
        texte += "Etape : " + i + " : Total : " + cumulAddition + " \n";
        if(i === nombreSaisie) {
            texte += "Le résultat des " + nombreSaisie + " premiers chifres est égal à " + cumulAddition;
        }
        console.log(texte);
    }
}

function multiplicationDesNPremiersNombres() {
    nombreSaisie2 = parseInt(readline.question("Combien de nombres ? "));
    var resultatFactorielle = 1;
    for(var i = 1; i <= nombreSaisie2 ; i++) {
        resultatFactorielle *= i;
        console.log("Etape : " + i + " : Total : " + resultatFactorielle);
    }
    console.log("La multiplication des " + nombreSaisie2 + " premiers nombres est " + resultatFactorielle);
}

// Correction 
// var calculManager = require("./calculManager");
// var readLine = require("readline-sync");

// var arreter = false;
// var action = "";
// var nombre = 0;

// while(!arreter) {
//     var maQuestion = "Saisir l'action a realiser : \n";
//     maQuestion += "1 : Addition des n premiers nombres \n";
//     maQuestion += "2 : Multiplication des n premiers nombres \n";
//     maQuestion += "3 : Quitter \n";
//     action = parseInt(readLine.question(maQuestion));
//     if(action === 1){
//         nombre = parseInt(readLine.question("Combien de nombres ?"));
//         calculManager.addition(nombre);
//     } else if(action === 2){
//         nombre = parseInt(readLine.question("Combien de nombres ?"));
//         calculManager.multiplication(nombre);
//     } else if(action === 3){
//         arreter = true;
//         console.log("Fin du programme");
//     }
// }

