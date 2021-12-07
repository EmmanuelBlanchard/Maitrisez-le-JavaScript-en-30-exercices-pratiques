var types = require('./json/types.json');
var armes = require('./json/armes.json');

var armeManager = {
    afficherArmes : function() {
        console.log(armes, types);
        for(var arme in armes) {
            var idArme = arme.substr(-1,1);
            console.log(idArme + " : " + this.afficherArme(armes[arme]));
        }
    },
    afficherArme : function(arme) {
        return "Nom : " + arme.nom +" - Type : " + types[arme.type];
    },
    ajouterArme : function() {
        console.log("Ajout d'arme");
    },
    supprimer : function() {
        console.log("Suppression d'arme");
    },

}
module.exports = armeManager;