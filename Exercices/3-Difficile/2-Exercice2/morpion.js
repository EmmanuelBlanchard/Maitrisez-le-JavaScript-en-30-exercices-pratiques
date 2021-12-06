var readline = require('readline-sync');

var tour = 1;
var fin = false;

// tableau a deux dimensions
var morpion = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
];

afficherGrille(morpion);

while(!fin) {
    var positionOk = false;
    while(!positionOk) {
        console.log("-----------------------------------");
        console.log("Quelle position voulez vous ? ");
        var ligneSaisie = parseInt(readline.question("Ligne : "));
        var colonneSaisie = parseInt(readline.question("Colonne : "));
        positionOk = verificationPosition(ligneSaisie,colonneSaisie,morpion);
        if(!positionOk) {
            console.log("******** Choisir une position valide ********");
        }
    }
    morpion[ligneSaisie-1][colonneSaisie-1] = tour;
    (tour === 1) ? tour=2 : tour=1;
    afficherGrille(morpion);
}

function afficherGrille(tab) {
    for(var i = 0; i < tab.length ; i++) {
        var txt = "";
        for(var j = 0; j < tab[i].length; j++) {
            if(tab[i][j] === 0) {
                txt += "| |";
            } else if(tab[i][j] === 1) {
                txt += "|x|";
            } else if (tab[i][j] === 2) {
                txt += "|o|";
            }
        }
        console.log(txt);
    }
}

function verificationPosition(ligneSaisie,colonneSaisie,morpion) {
    if(ligneSaisie >= 1 && ligneSaisie <= 3 && colonneSaisie >= 1 && colonneSaisie <= 3 && morpion[ligneSaisie-1][colonneSaisie-1] === 0) {
        return true;
    } else {
        return false;
    }
};