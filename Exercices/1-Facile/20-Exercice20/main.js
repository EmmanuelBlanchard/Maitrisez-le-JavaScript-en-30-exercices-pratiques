var tab = [2,6,10,3,8,7,20];
var cumulAddition = 0;

for(var i = 0; i < tab.length ; i++) {
    if(tab[i] % 2 === 0) {
        cumulAddition += tab[i];
        console.log("Itération : " + i + " : " + cumulAddition);
    } else {
        console.log("Itération : " + i + " : non paire ");
    }
}

console.log("Le total est de : " + cumulAddition);

// Correction
// var tab = [2,6,10,3,8,7,20];
// var resultat = 0;

// for(var cpt = 0; cpt < tab.length ; cpt++) {
//     if(tab[cpt] % 2 === 0) {
//         resultat += tab[cpt];
//         console.log("itération : " + cpt + " : " + resultat);
//     } else {
//         console.log("itération : " + cpt + " : non paire ");
//     }
// }

// console.log("Le total est de : " + resultat);