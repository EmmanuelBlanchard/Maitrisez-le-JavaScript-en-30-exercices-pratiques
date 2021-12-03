var tab = [2,6,10,20,9,14];
var tab2 = [2,6,10,20,18,14];

function afficherMoyenneTableau(tableau) {
    var resultatTableau = 0;
    for(var i = 0; i < tableau.length; i++) {
        resultatTableau += tableau[i];
    }
    var moyenneTableau = parseInt(resultatTableau) / tableau.length;
    console.log("La moyenne est : " + moyenneTableau);
}

function tableauPair(tableau) {
    for(var i = 0; i < tableau.length; i++) {
        if(tableau[i] % 2 !== 0) {
            return false;
        };
    }
    return true;
}

function afficherSiTableauContientChiffresPairesImpaires(tableau) {
    if(tableauPair(tableau)) {
        console.log("Le tableau contient que des chiffres pairs");
    } else {
        console.log("Le tableau contient que des chiffres impairs");
    }
}

afficherMoyenneTableau(tab);
afficherMoyenneTableau(tab2);

afficherSiTableauContientChiffresPairesImpaires(tab)
afficherSiTableauContientChiffresPairesImpaires(tab2)

// Correction
// var tab = [2,6,10,20,9,14];
// var tab2 = [2,6,10,20,18,14];

// function calculMoyenne(t) {
//     var res = 0;
//     for(var i = 0 ; i < t.length ; i++) {
//         res += t[i];
//     }
//     return res / t.length;
// }

// function estTableauPair(t) {
//     for(var i = 0 ; i < t.length ; i++) {
//         if(t[i] % 2 !== 0){
//             return false;
//         }
//     }
//     return true;
// }
// var resultat = calculMoyenne(tab);

// console.log("La moyenne est : " + resultat);

// if(estTableauPair(tab)) {
//     console.log("Tableau pair");
// } else {
//     console.log("Tableau impair");
// }
// var resultat2 = calculMoyenne(tab2);

// console.log("La moyenne est : " + resultat2);

// if(estTableauPair(tab2)) {
//     console.log("Tableau pair");
// } else {
//     console.log("Tableau impair");
// }
