var toto = {
    nom : "Toto",
    age : 25,
    poids : 80,
    taille : 180,

    affichage : function() {
        var texte = "Nom : " + this.nom + "\n";
        texte += "Age : " + this.age + "\n";
        texte += "Poids : " + this.poids + "\n";
        texte += "Taille : " + this.taille + "\n";
        console.log(texte);
    },

    getForce() {
        return (this.taille * this.poids) / this.age;
    }
}

var marcel = {
    nom : "Marcel",
    age : 32,
    poids : 100,
    taille : 175,

    affichage : function() {
        var texte = "Nom : " + this.nom + "\n";
        texte += "Age : " + this.age + "\n";
        texte += "Poids : " + this.poids + "\n";
        texte += "Taille : " + this.taille + "\n";
        console.log(texte);
    },

    getForce() {
        return (this.taille * this.poids) / this.age;
    }
}

toto.affichage();
var force = toto.getForce();
console.log(force);

marcel.affichage();
var force2 = marcel.getForce();
console.log(force2);

if(toto.getForce() > marcel.getForce()) {
    console.log("Toto est plus fort que Marcel ! Voici ses informations : ");
    toto.affichage();
    console.log(`Force : ${toto.getForce()}`);
} else {
    console.log("Marcel est plus fort que Toto ! Voici ses informations : ");    
    marcel.affichage()
    console.log(`Force : ${marcel.getForce()}`);
}