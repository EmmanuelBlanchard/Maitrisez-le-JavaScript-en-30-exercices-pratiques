var classe = {
    marc : {
        nom : "Marc",
        age : 21,
        tableauDeNotes : [12,15,13,10,7],
    },
    eric : {
        nom : "Eric",
        age : 18,
        tableauDeNotes : [5,15,3,8,17],
    },
    marie : {
        nom : "Marie",
        age : 22,
        tableauDeNotes : [10,10,11,12,11],
    },

    afficherEleves : function(eleve) {
        console.log("Nom : " + eleve.nom);
        console.log("Age : " + eleve.age);
        console.log("Notes : ");
        var texteNotes = "";
        for(var i = 0 ; i < eleve.tableauDeNotes.length ; i++) {
            texteNotes += "Note " + i + " : " + eleve.tableauDeNotes[i] + "\n";
        }
        console.log(texteNotes);
    },

    afficherClasse : function() {
        console.log("Voici vos élèves : ");
        this.afficherEleves(this.marc);
        this.afficherEleves(this.eric);
        this.afficherEleves(this.marie);
        console.log("-------------------------------------------");
    },

    calculerMoyenneEleve : function(eleve) {
        var resultat = 0;
        for(var i = 0 ; i < eleve.tableauDeNotes.length ; i++) {
            resultat += eleve.tableauDeNotes[i];
        }
        return resultat / eleve.tableauDeNotes.length;
    },

    calculerMoyenneClasse : function() {
        var moyenneMarc = this.calculerMoyenneEleve(this.marc);
        var moyenneEric = this.calculerMoyenneEleve(this.eric);
        var moyenneMarie = this.calculerMoyenneEleve(this.marie);
        var moyenneClasse = (moyenneMarc + moyenneEric + moyenneMarie)/3;
        return moyenneClasse;
    },
}

classe.afficherClasse();
// moyenneMarc = classe.calculerMoyenneEleve(classe.marc);
// console.log("Moyenne de Marc : " + moyenneMarc);
// moyenneEric = classe.calculerMoyenneEleve(classe.eric);
// console.log("Moyenne de Eric : " + moyenneEric);
// moyenneMarie = classe.calculerMoyenneEleve(classe.marie);
// console.log("Moyenne de Marie : " + moyenneMarie);
console.log(`Voici la moyenne de la classe : ${classe.calculerMoyenneClasse()}`);