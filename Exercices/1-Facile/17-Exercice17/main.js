var readline = require('readline-sync');

var chiffreSaisie = parseInt(readline.question("Saisir le chiffre 3 : "));

var fin = false;

while(!fin) {
    if(chiffreSaisie !== 3) {
        console.log("Vous n'avez pas saisi le bon chiffre ...");
        chiffreSaisie = parseInt(readline.question("Saisir le chiffre 3 : "));
    } else {
        console.log("Bravo ! vous avez saisi un 3");
        fin = true;
    }
}

// Correction While
// var readline = require('readline-sync');
// var chiffreSaisie = parseInt(readline.question("Saisir le chiffre 3 : "));

// while(chiffreSaisie !== 3) {
//     console.log("Vous n'avez pas saisi le bon chiffre ...");
//     chiffreSaisie = parseInt(readline.question("Saisir le chiffre 3 : "));
// }

// console.log("Bravo ! vous avez saisi un 3");

// Correction Do While
// var readline = require('readline-sync');
// var chiffreSaisie = 0;

// do {
//     console.log("Vous n'avez pas saisi le bon chiffre ...");
//     chiffreSaisie = parseInt(readline.question("Saisir le chiffre 3 : "));
// } while(chiffreSaisie !== 3)

// console.log("Bravo ! vous avez saisi un 3");