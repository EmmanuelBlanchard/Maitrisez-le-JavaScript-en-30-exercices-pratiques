const monButton = document.querySelector("button");
const monDiv = document.querySelector("div");

monButton.addEventListener("click", function() {
    texte = "";
    for(var i = 1 ; i <= 10; i++) {
        texte += "3 * " + i + " = " + parseInt(3*i) + " <br />"; 
    }
    monDiv.innerHTML = texte;
});
