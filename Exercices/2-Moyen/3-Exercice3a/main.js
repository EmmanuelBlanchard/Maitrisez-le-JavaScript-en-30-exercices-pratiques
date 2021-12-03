var readline = require('readline-sync');

var choixHauteur = parseInt(readline.question("Combien de hauteur ? "));

var texte = "";
for(var i = 0; i <= choixHauteur; i++) {
    texte += "xx";
    console.log(texte);
}
for(var i = 0; i <= choixHauteur-1; i++) {
    texte = texte.substring(0,texte.length-2);
    console.log(texte);
}
