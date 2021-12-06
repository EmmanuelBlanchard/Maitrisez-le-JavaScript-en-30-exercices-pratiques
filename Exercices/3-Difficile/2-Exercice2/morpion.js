var readline = require('readline-sync');

var tour = 1;
var nbCaseVide = 9;
var fin = false;

// tableau a deux dimensions
var morpion = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
];

afficherGrille(morpion);
while(!fin && nbCaseVide > 0) {
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
    afficherGrille(morpion);
    nbCaseVide--;
    fin = verificationEndGame(morpion);
    if(fin) {
        console.log("Bravo, Joueur %d a gagné",tour);
    }
    (tour === 1) ? tour=2 : tour=1;    
}
if(nbCaseVide === 0) {
    console.log("Pas de gagnant !");
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

function verificationPosition(ligneSaisie,colonneSaisie,tab) {
    if(ligneSaisie <= 0 || ligneSaisie >= 4 || colonneSaisie <= 0 || colonneSaisie >= 4) {
        return false;
    }
    if(tab[ligneSaisie-1][colonneSaisie-1] === 0) {
        return true;
    }
};

function verificationEndGame(tab) {
    for(var i = 0; i < tab.length ; i++) {
        if(tab[i][0] === tab[i][1] && tab[i][0] === tab[i][2] && tab[i][0] !== 0) return true;
        if(tab[0][i] === tab[1][i] && tab[0][i] === tab[2][i] && tab[0][i] !== 0) return true;
    }
    if(tab[0][0] === tab[1][1] && tab[0][0] === tab[2][2] && tab[0][0] !== 0) return true;
    if(tab[0][2] === tab[1][1] && tab[0][2] === tab[2][0] && tab[0][2] !== 0) return true;
    return false;
}