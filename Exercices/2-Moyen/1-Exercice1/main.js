var ligne = [];
for(var j = 1 ; j <= 10; j++) {
    var colonne = [];
    for(var i = 1 ; i <= 10; i++) {
        colonne.push(i * j);
    }
    ligne.push(colonne);
}

var lesTables= "--------------------------------------------------\n";
for(var j = 0; j <= 9 ; j++) {
    var txt = "| ";
    for(var i = 0; i <= 9 ; i++) {
        var nb = ""+ligne[j][i];
        if(nb.length === 1) {
            txt += "0";
        }
        txt += ligne[j][i];
        if(nb.length === 3) {
            txt += "|";
        } else {
            txt += " | ";
        }
    }
    lesTables += txt + "\n";
}
lesTables += "--------------------------------------------------";
console.log(lesTables);
