var chien1 = creerAnimal("Mina",2,false);
var chien2 = creerAnimal("Pam",15,false);
var chien3 = creerAnimal("Hocket",7,true);
var chat1 = creerAnimal("Tya",7,false);
var chat2 = creerAnimal("Milo",5,true);
var chat3 = creerAnimal("Felicia",5,false);
var chat4 = creerAnimal("Lili",1,false);

var tableauChats = [chat1,chat2,chat3,chat4];
var tableauChiens = [chien1,chien2,chien3];

afficherListeAnimaux(tableauChats);
// calculerMoyenneAgeListeAnimaux(tableauChats);
// afficherMoyenneAgeListeAnimaux(tableauChats,"chats");
console.log(`La moyenne d'age des ${tableauChats.length} chats est de : ${calculerMoyenneAgeListeAnimaux(tableauChats)} ans`);
console.log("-------------------------------------");
afficherListeAnimaux(tableauChiens);
// calculerMoyenneAgeListeAnimaux(tableauChiens);
// afficherMoyenneAgeListeAnimaux(tableauChiens,"chiens");
console.log(`La moyenne d'age des ${tableauChiens.length} chiens est de : ${calculerMoyenneAgeListeAnimaux(tableauChiens)} ans`);
console.log("-------------------------------------");

function creerAnimal(nom,age,sexe) {
    var animal = {};
    animal.nom = nom;
    animal.age = age; 
    animal.sexe = sexe;
    return animal;
}

function afficherListeAnimaux(liste) {
    var texte = "";
    for(var i = 0 ; i < liste.length ; i++) {
        texte += "Nom : " + liste[i].nom + "\n";
        texte += "Age : " + liste[i].age + "\n";
        if(liste[i].sexe === true) {
            texte += "Sexe : mâle \n";
        } else {
            texte += "Sexe : femelle \n";
        }
        texte += "-------------------------------------";
        if(i !== liste.length-1) texte += "\n";
    }
    console.log(texte);
}

function calculerMoyenneAgeListeAnimaux(liste) {
    var resultat = 0;
    for(var i = 0 ; i < liste.length ; i++) { 
        resultat += liste[i].age;
    }
    return resultat / liste.length;    
}

function afficherMoyenneAgeListeAnimaux(liste,animal) {
    moyenne = calculerMoyenneAgeListeAnimaux(liste);
    console.log("La moyenne d'age des " + liste.length + " " + animal + " est de : " + moyenne + " ans");
}
