var calculManager = {
    addition : function(nombre) {
        var total = 0;
        for(var i = 1; i <= nombre ; i++) {
            total += i;
            console.log("Step : " + i + " total : " + total);
        }
        console.log("L'addition des " + nombre + " premiers nombres est " + total);
    },
    multiplication : function(nombre) {
        var total = 1;
        for(var i = 1 ; i <= nombre ; i++) {
            total *= i;
            console.log("Step : " + i + " total : " + total);
        }
        console.log("La multiplication des " + nombre + " premiers nombres est " + total);
    }
}

module.exports = calculManager;
