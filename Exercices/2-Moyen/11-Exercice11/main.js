const inputPseudo = document.querySelector("#pseudo");
const chiffreSaisi = document.querySelector("#chiffre");
const buttonAddition = document.querySelector("#addition");
const buttonFactorielle = document.querySelector("#factorielle");
const resultatAffichage = document.querySelector("#resultat");

function afficherResultat(calcul) {
    resultat.innerHTML = "<h1>Bonjour " + inputPseudo.value + "</h1>";
    resultat.innerHTML += "<div>Le resultat du calcul demandé est : " + calcul + " </div>";
}

buttonAddition.addEventListener("click", function() {
    var calculResultat = calculManager.addition(parseInt(chiffreSaisi.value));
    afficherResultat(calculResultat);
});

buttonFactorielle.addEventListener("click", function() {
    var calculResultat = calculManager.factorielle(parseInt(chiffreSaisi.value));
    afficherResultat(calculResultat);
});
