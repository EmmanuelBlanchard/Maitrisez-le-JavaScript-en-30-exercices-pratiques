var readline = require('readline-sync');

var mot = readline.question("Quel est le mot, voulez vous saisir ? ");
var nombreLimiteCaracteresSaisie = parseInt(readline.question("Quel est le nombre de la limite de caracteres, voulez vous saisir ? "));

afficherResultatMotContientPlusDeXCaracteres(mot,nombreLimiteCaracteresSaisie);

function afficherResultatMotContientPlusDeXCaracteres(mot,nombreLimiteCaracteresSaisie) {
    if(verificationMotContientPlusDeXCaracteres(mot,nombreLimiteCaracteresSaisie)) {
        console.log("Le mot " + mot + " contient " + mot.length + " caracteres ");
    } else {
        console.log("Le mot fait plus de " + nombreLimiteCaracteresSaisie + " caracteres ");
    }
}

function verificationMotContientPlusDeXCaracteres(mot,nombreLimiteCaracteresSaisie) {
    if(mot.length <= nombreLimiteCaracteresSaisie) {
        return true;
    } else {
        return false;
    }
}

// Correction
function afficherTaille(mot) {
    if(mot.length < 8) {
        console.log(`Le mont contient ${mot.length} `)
    } else {
        console.log("Le mot fait plus de 8 caractères");
    }
}

var mot1 = "Marc";
var mot2 = "Gwendoline";

afficherTaille(mot1);
afficherTaille(mot2);
