var calculManager = {
    addition : function(chiffre) {
        var resultat = 0;
        for(var i = 1; i <= chiffre; i++) {
            resultat += i;
        }
        return resultat;
    },
    factorielle : function(chiffre) {
        var resultat = 1;
        for(var i = 1; i <= chiffre; i++) {
            resultat *= i;
        }
        return resultat;
    }
}