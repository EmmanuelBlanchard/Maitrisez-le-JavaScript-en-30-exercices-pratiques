var readline = require('readline-sync');

var nomSaisie = readline.question("Quel est vore nom ? ");
var prenomSaisie = readline.question("Quel est vore prenom ? ");
var ageSaisie = parseInt(readline.question("Quel est vore age ? "));

if(nomSaisie !== undefined && ageSaisie !== undefined && ageSaisie !== undefined) {
    var affichageTexte = affichage(nomSaisie,prenomSaisie,ageSaisie);
    console.log(affichageTexte);
}

function affichage(nomSaisie,prenomSaisie,ageSaisie) {
    var texte = "";
    texte += "--------------------------------------- \n";
    texte += "---------------BIENVENUE--------------- \n";
    texte += "--------------------------------------- \n";
    texte += "Votre nom est : " + nomSaisie + " \n";
    texte += "Votre prenom est : " + prenomSaisie + " \n";
    texte += "Vous avez : " + ageSaisie + " ans \n";
    return texte;
}