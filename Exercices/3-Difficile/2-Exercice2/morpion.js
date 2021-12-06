var readline = require('readline-sync');

// var ligne1 = [0,0,0];
// var ligne2 = [0,0,0];
// var ligne3 = [0,0,0];
// var tableau = [ligne1,ligne2,ligne3];

// tableau a deux dimensions
var morpion = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
];

afficherGrille(morpion);
console.log("-----------------------------------");
console.log("Quelle position voulez vous ? ");
var ligneSaisie = parseInt(readline.question("Ligne : "));
var colonneSaisie = parseInt(readline.question("Colonne : "));
morpion[ligneSaisie-1][colonneSaisie-1] = 1;
afficherGrille(morpion);


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
