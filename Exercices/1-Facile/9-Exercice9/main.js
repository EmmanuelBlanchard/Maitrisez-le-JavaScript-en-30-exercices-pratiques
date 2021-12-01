var voiture = {
    immatriculation : "AB1234CD",
    marque : "yotota",
    annee : 2002,
    caracteristiques: {
        nombreKilometres : 20000,
        couleur : "bleue",
        puissance : 7
    }
}

console.log(`La voiture d'immatriculation ${voiture.immatriculation}, 
de marque ${voiture.marque}, 
date de ${voiture.annee}, 
avec ${voiture.caracteristiques.nombreKilometres} kilomètres,
de couleur ${voiture.caracteristiques.couleur},
de puissance ${voiture.caracteristiques.puissance} chevaux.`);
