var readline = require('readline-sync');

var nombreSaisie = parseInt(readline.question("Quel nombre voulez vous saisir ? "));
var fin = false;

while(!fin) {
    if(isNaN(nombreSaisie)) {
        console.log("Veuillez recommencez la saisie, vous devez saisir un nombre");
        nombreSaisie = parseInt(readline.question("Quel nombre voulez vous saisir ? "));
    } else {
        console.log("C'est un chiffre");
        fin = true;
    }
}

console.log("Le chiffre saisi est : " + nombreSaisie);