var c1 = 123;
var c2 = 20;

afficherResultatDivisibleParTrois(c1);
afficherResultatDivisibleParTrois(c2);

function afficherResultatDivisibleParTrois(chiffre) {
    if(verificationDivisiblePar3(chiffre)) {
        console.log("Le resultat de " + chiffre + " / 3 = " + parseInt(chiffre/3));
    } else {
        console.log("Le chiffre " + chiffre + " n'est pas divisible pas 3");
    }
}

function verificationDivisiblePar3(chiffre) {
    return chiffre % 3 === 0;
}

// Amelioration
var readline = require('readline-sync');

var nombreSaisie = parseInt(readline.question("Quel nombre voulez vous saisir ? "));
var nombreDiviseurSaisie = parseInt(readline.question("Quel est le nombre diviseur, voulez vous saisir ? "));

afficherResultatDivisiblePar(nombreSaisie,nombreDiviseurSaisie);

function afficherResultatDivisiblePar(chiffre,nombreDivisible) {
    if(verificationDivisiblePar(chiffre,nombreDivisible)) {
        console.log("Le resultat de " + chiffre + " / " + nombreDivisible + " = " + parseInt(chiffre/nombreDivisible));
    } else {
        console.log("Le chiffre " + chiffre + " n'est pas divisible pas " +nombreDivisible + " ");
    }
}

function verificationDivisiblePar(chiffre,nombreDivisible) {
    return chiffre % nombreDivisible === 0;
}
