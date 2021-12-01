var readline = require('readline-sync');

const PUISSANCE = 2;

var nombrePuissanceVoulue = parseInt(readline.question("Puissance voulue ? "));

console.log(PUISSANCE + " à la puissance " + nombrePuissanceVoulue + " = "  + Math.pow(PUISSANCE, nombrePuissanceVoulue));
