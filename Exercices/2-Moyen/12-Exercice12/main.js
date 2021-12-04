const rayonSaisi = document.querySelector("#rayon");
const buttonPerimetre = document.querySelector("#perimetre");
const buttonAire = document.querySelector("#aire");
const resultatAffichage = document.querySelector("#resultat");
const infoAffichage = document.querySelector("#info");

// function afficherResultat(calcul,typeCalcul) {
//     if(typeCalcul === "perimetre") {
//         infoAffichage.innerHTML = "";
//         resultatAffichage.innerHTML = "<div>Le périmètre d'un cercle de rayon " + parseInt(rayonSaisi.value) + " est : " + calcul + " </div>";
//         resultatAffichage.style.color = "green";
//     } else if (typeCalcul === "aire") {
//         infoAffichage.innerHTML = "";
//         resultatAffichage.innerHTML = "<div>L'aire d'un cercle de rayon " + parseInt(rayonSaisi.value) + " est : " + calcul + " </div>";
//         resultatAffichage.style.color = "blue";
//     }
// }

// function afficherInfo() {
//     resultatAffichage.innerHTML = "";
//     infoAffichage.innerHTML = "<div>La premiere action est de saisir un chiffre </div>";
//     infoAffichage.style.color = "grey";
// }

// buttonPerimetre.addEventListener("click", function() {
//     if(rayonSaisi.value !== "") {
//         var calculResultat = cercleManager.perimetre(parseInt(rayonSaisi.value));
//         afficherResultat(calculResultat,"perimetre");
//     } else {
//         afficherInfo();
//     }
// });

// buttonAire.addEventListener("click", function() {
//     if(rayonSaisi.value !== "") {
//         var calculResultat = cercleManager.aire(parseInt(rayonSaisi.value));
//         afficherResultat(calculResultat,"aire");
//     } else {
//         afficherInfo();
//     }
// });

// Correction
addEventListener("click", function(event) {
    if(rayonSaisi.value !== "") {
        if(event.target.id === "perimetre") {
            var calcul = cercleManager.perimetre(parseInt(rayonSaisi.value));
            resultatAffichage.innerHTML = "<div>Le périmètre d'un cercle de rayon " + parseInt(rayonSaisi.value) + " est : " + calcul + " </div>";
            resultatAffichage.style.color = "green";
            resultatAffichage.style.display = "";
        } else if(event.target.id === "aire") {
            var calcul = cercleManager.aire(parseInt(rayonSaisi.value));
            resultatAffichage.innerHTML = "<div>L'aire d'un cercle de rayon " + parseInt(rayonSaisi.value) + " est : " + calcul + " </div>";
            resultatAffichage.style.color = "blue";
            resultatAffichage.style.display = "";
        }
        infoAffichage.style.display = "none";
    } else {
        infoAffichage.innerHTML = "<div>La premiere action est de saisir un chiffre </div>";
        infoAffichage.style.color = "grey";
        infoAffichage.style.display = "";
        resultatAffichage.style.display = "none";
    }
});