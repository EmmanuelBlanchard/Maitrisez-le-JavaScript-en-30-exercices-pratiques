// var readline = require('readline-sync');

// var chiffreSaisie = parseInt(readline.question("Saisir un chiffre : "));
// var resultatFactorielle = 1;

// for(var i = 1; i <= chiffreSaisie ; i++) {
//     resultatFactorielle *= i;
//     console.log("Etape " + i + " : " + resultatFactorielle);
// }
// console.log("Le résultat de factorielle de " + chiffreSaisie + " est " + resultatFactorielle);


// Correction 
// var readline = require('readline-sync');

// var saisie = parseInt(readline.question("Saisir un chiffre : "));
// var resultat = 1;

// for(var i = saisie; i > 1 ; i--) {
//     resultat *= i;
//     console.log("Etape " + i + " : " + resultat);
// }
// console.log("Le résultat de factorielle de " + saisie + " est " + resultat);

// Autre Correction
var readline = require('readline-sync');

var saisie = parseInt(readline.question("Factorielle : "));

var resultatFactorielle = factorielle(saisie);

console.log("Le résultat de factorielle de " + saisie + " est " + resultatFactorielle);

function factorielle(n){
    // factorielle !5 = 5*4*3*2*1 OU 5 * !4
    // factorielle !4 = 4*3*2*1 OU 4 * !3
    // factorielle !3 = 3*2*1 OU 3 * !2
    // factorielle !2 = 2*1 OU 2 * !1
    // factorielle !1 = 1
    if(n > 1) {
        return n * factorielle(n-1);
    } else {
        return 1;
    }
}
