var readline = require('readline-sync');

var armeManager = require('./armeManager.js');

var choixMenu = -1;

while(choixMenu !== 0) {
    menu();
    choixMenu = parseInt(readline.question("Quel est votre choix ? "));
    switch(choixMenu) {
        case 1 : // Affichages des armes
            armeManager.afficherArmes();
        break;
        case 2 : // Ajouter une arme
            armeManager.ajouterArme();
        break;
        case 3 : // Supprimer une arme
            armeManager.supprimerArme();
        break;
        case 0 : console.log("A +");
        break;
        default : console.log("Cas inconnu");
        break;
    }

}

function menu() {
    var txt = "";
    txt += "1/ Afficher les armes \n";
    txt += "2/ Ajouter une arme \n";
    txt += "3/ Supprimer une arme \n";
    txt += "0/ Quitter \n";
    console.log(txt);
}