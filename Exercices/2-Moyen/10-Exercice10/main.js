const login = document.querySelector("#login");
const motDePasse = document.querySelector("#password");
const resultatMotDePasse = document.querySelector("#resultatPassword");

console.log(login);
console.log(motDePasse);
console.log(resultatMotDePasse);

login.addEventListener("keyup", function() {
    var regex = /^[a-z0-9._-]+@[a-z0-9._-]+.[a-z]{2,6}$/;
    if(!regex.test(login.value)) {
        login.style.backgroundColor = "red";
    } else {
        login.style.backgroundColor = "green";
    }
});

motDePasse.addEventListener("blur", function() {
    var caractereDecimal = /\d/;
    var caractereSpecial = /[$&@!*#~²]/;
    var erreur = "";

    if(motDePasse.value.length < 6) {
        erreur += "<li>Le mot de passe est trop court. Il doit faire plus de 6 caractères</li>";
    } else if (motDePasse.value.length > 8) {
        erreur += "<li>Le mot de passe est trop long. Il ne doit pas faire plus de 8 caractères</li>";
    }

    if(!motDePasse.value.match(caractereDecimal)) {
        erreur += "<li>Le mot de passe doit contenir un chiffre.</li>";
    }
    if(!motDePasse.value.match(caractereSpecial)) {
        erreur += "<li>Le mot de passe doit contenir un caractère special ($&@!*#~²).</li>";
    }

    if(erreur !== "") {
        resultatMotDePasse.innerHTML = "Le mot de passe est : <ul>" + erreur + "</ul>";
        resultatMotDePasse.style.border ="2px solid red";
    } else {
        resultatMotDePasse.innerHTML = "Le mot de passe est valide ";
        resultatMotDePasse.style.border ="2px solid green";
    }
});