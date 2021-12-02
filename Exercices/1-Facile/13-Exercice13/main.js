const monDiv = document.querySelector("div");
var nombreDeClics = 0;

function incrementer() {
    nombreDeClics ++;
    monDiv.innerHTML = "Vous avez cliqué " + nombreDeClics + " fois";
}