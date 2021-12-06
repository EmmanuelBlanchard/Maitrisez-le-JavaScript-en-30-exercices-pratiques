const divResultat = document.querySelector("#resultat");
const divTouches = document.querySelector("#touches");
const divRecapitulatif = document.querySelector("#recapitulatif");

var chiffreSaisi = "";
var operateur = "+";
var recapitulatif = "";

divTouches.addEventListener("click", function(event) {
    var button = event.target.id;
    
    if(button.substring(0,1) === "c") {
        // += pour inclure un nombre avec plusieurs chiffres
        chiffreSaisi += button.substring(1,2);
        divResultat.value = chiffreSaisi;
    } else if(button.substring(0,1) === "b") {
        buttonSaisi = button.substring(1,2);
        // La fonction manageOperation va permettre de réaliser le calcul "précèdent".
        // En effet, lorsque vous cliquez sur un opérateur, cela "termine" la précèdente opération que l'on peut donc calculer.
        manageOperation();
        switch(button) {
            case "bAddition" : operateur = "+";
            break;
            case "bSoustraction" : operateur = "-";
            break;
            case "bDivision" : operateur = "/";
            break;
            case "bMultiplication" : operateur = "*";
            break;
            default : 
            break;
        }
        recapitulatif += chiffreSaisi + " " + operateur + " ";
    } else if(button === "point") {
        chiffreSaisi += ".";
    } else if(button === "Egal") {

    }
    divRecapitulatif.innerHTML = recapitulatif;
});

function manageOperation() {

}