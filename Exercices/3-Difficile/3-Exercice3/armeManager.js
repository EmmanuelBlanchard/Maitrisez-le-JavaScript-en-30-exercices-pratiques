var readline = require('readline-sync');
var fs = require('fs');
var types = require('./json/types.json');
var armes = require('./json/armes.json');

var armeManager = {
    afficherArmes : function() {
        for(var arme in armes) {
            if(arme.substr(0,4) === "arme") {
                var idArme = arme.substr(-1,1);
                console.log(idArme + " : " + this.afficherArme(armes[arme]));
            }
        }
    },
    afficherArme : function(arme) {
        return "Nom : " + arme.nom +" - Type : " + types[arme.type];
    },
    ajouterArme : function() {
        var nouvelleArme = {};
        nouvelleArme.nom = readline.question("Quel est le nom de l'arme que vous voulez ajouter ? ");
        this.afficherTypes();
        nouvelleArme.type = parseInt(readline.question("Quel est son type ? "));
        armes.increment++;
        armes["arme"+armes.increment] = nouvelleArme;
        fs.writeFileSync("./json/armes.json",JSON.stringify(armes,undefined,4));
    },
    afficherTypes : function() {
        for(var type in types) {
            // indice  " : " conteneur[cle] => valeur
            console.log(type + " : " + types[type]);
        }
    },
    supprimerArme : function() {
        var armeASupprimer = parseInt(readline.question("Quel est le numero de l'arme que vous voulez supprimer ? "));
        delete armes["arme"+armeASupprimer];
        fs.writeFileSync("./json/armes.json",JSON.stringify(armes,undefined,4));
    },

}
module.exports = armeManager;