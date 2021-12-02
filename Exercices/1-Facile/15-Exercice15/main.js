// Version JS Natif
// const monButton = document.querySelector("button");
// const monDiv = document.querySelector("div");

// monButton.addEventListener("click", function() {
//     monDiv.innerHTML = pileOuFace();
// });

// Version Jquery
$("button").on("click", function() {
    $("div").html(pileOuFace());
});

function pileOuFace() {
    var random = Math.floor(Math.random() * 2);
    // if(random >= 1) {
    //     return "Pile";
    // } else {
    //     return "Face";
    // }
    return (random >= 1 ? "Pile" : "Face");
}
