var readline = require('readline-sync');

var nombreTableDeMultiplicationSaisie = parseInt(readline.question("Quel table de multiplication, voulez vous afficher ? "));

if(nombreTableDeMultiplicationSaisie !== undefined) {
    console.log(affichageTableMultiplication(nombreTableDeMultiplicationSaisie));
}

function affichageTableMultiplication(nombreTableDeMultiplicationSaisie) {
    var texte = "";
    for(var i = 1; i <= 10; i++) {
        texte += nombreTableDeMultiplicationSaisie + " * " + i + " = " + parseInt(nombreTableDeMultiplicationSaisie*i) + " \n";
    }
    return texte;
}