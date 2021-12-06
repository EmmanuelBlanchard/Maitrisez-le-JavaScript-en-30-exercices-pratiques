const divResultat = document.querySelector("#resultat");
const divTouches = document.querySelector("#touches");
const divRecapitulatif = document.querySelector("#recapitulatif");

var chiffreSaisi = "";
var operateur = "+";
var recapitulatif = "";
var resultat = 0;
var nbCalcul = 0;
var reinitialisation = true;

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
        if(reinitialisation) {
            recapitulatif = "";
            reinitialisation = false;
        }
        if(nbCalcul > 1 ) recapitulatif += "<br /> ";
        recapitulatif += resultat + " " + operateur + " ";
    } else if(button === "point") {
        chiffreSaisi += ".";
    } else if(button === "Egal") {
        manageOperation();
        recapitulatif += " = " + resultat;
        nbCalcul = 1;
        reinitialisation = true;
    }
    divRecapitulatif.innerHTML = recapitulatif;
    divRecapitulatif.scrollTop = divRecapitulatif.scrollHeight - divRecapitulatif.clientHeight;
});

function manageOperation() {
    if(chiffreSaisi !== "") {
        resultat = doOperation(operateur, resultat, parseFloat(chiffreSaisi));
        if(nbCalcul > 0) {
            recapitulatif += parseFloat(chiffreSaisi);
        }
        divResultat.value = resultat;
        chiffreSaisi = "";
        nbCalcul ++;
    } else {
        var position = recapitulatif.lastIndexOf("<br /> ");
        recapitulatif = recapitulatif.substring(0,position);
    }
    
}

function doOperation(operateur, chiffreA, chiffreB) {
    var resultatOperation = 0;
    switch(operateur) {
        case "+" : resultatOperation = chiffreA + chiffreB;
        break;
        case "-" : resultatOperation = chiffreA - chiffreB;
        break;
        case "/" : resultatOperation = chiffreA / chiffreB;
        break;
        case "*" : resultatOperation = chiffreA * chiffreB;
        break;
    }
    return resultatOperation;
}