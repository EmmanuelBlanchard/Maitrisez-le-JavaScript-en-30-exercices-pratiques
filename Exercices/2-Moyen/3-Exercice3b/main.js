var readline = require('readline-sync');
var choixHauteur = parseInt(readline.question("Quelle est la hauteur ? "));

var texte2 = "";
for(var i = 0; i <= choixHauteur-1; i++) {
    texte2 += "  ";
}
var texte = "";
for(var i = 0; i <= choixHauteur; i++) {
    texte2 = texte2 + "xx";
    texte += "xx";
    console.log(texte2 + texte);
    texte2 = texte2.slice(2);
}
for(var i = 0; i <= choixHauteur-1; i++) {
    texte2 = "  " + texte2;
    texte = texte.substring(0,texte.length-2);
    console.log(texte2 + texte);
    texte2 = texte2.substring(0,texte2.length-2);
}
