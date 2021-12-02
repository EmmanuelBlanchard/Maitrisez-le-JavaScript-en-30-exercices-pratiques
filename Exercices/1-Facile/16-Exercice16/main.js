var random = Math.floor(Math.random() * 20 + 1);

console.log(random);
if(random <= 7) {
    console.log("Petit");
} else if(random <= 15){
    console.log("Moyen");
} else {
    console.log("Grand");
}
