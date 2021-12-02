var readline = require('readline-sync');

var personnage = {};

personnage.nom = readline.question("Quel est le nom ? ");
personnage.age = parseInt(readline.question("Quel age ? "));

personnage.caracteristiques = {};

personnage.caracteristiques.force = parseInt(readline.question("Quelle force ? "));
personnage.caracteristiques.agilite = parseInt(readline.question("Quelle agilite ? "));
personnage.caracteristiques.intelligence = parseInt(readline.question("Quelle intelligence ? "));

console.log(personnage);
