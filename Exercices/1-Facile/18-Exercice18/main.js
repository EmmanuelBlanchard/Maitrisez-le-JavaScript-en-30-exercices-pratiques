// var cumulAddition = 0;

// for(var i = 1 ; i <= 10 ; i++) {
//     cummulAddition += i;
//     texte = "";
//     texte += "Etape " + i + " : " + cumulAddition + " \n";
//     if(i === 10) {
//         texte += "Le résultat des dix premiers chifres est égal à " + cumulAddition;
//     }
//     console.log(texte);
// }

// Correction
var addition = 0;

for(var i = 1 ; i <= 10 ; i++) {
    addition += i;
    console.log("Etape " + i + " : " + addition);
}
console.log("Le résultat des dix premiers chifres est égal à " + addition);
