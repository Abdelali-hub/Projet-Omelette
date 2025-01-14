//Créez un objet personnage avec les propriétés et méthodes suivantes :
// Définition de l'objet personnage
let personnage = {
    nom: "Nom du personnage", 
    lieu: "Lieu actuel",      
    argent: 100,              
    mainDroite: [],          
    mainGauche: [],          

    // Méthode pour se déplacer
    seDeplacer(lieu) {
        this.lieu = lieu;
        console.log(`${this.nom} se déplace vers ${this.lieu}.`);
    },

    // Méthode pour payer un article
    payerArticle(article) {
        let prix = article.prix; 
        if (this.argent >= prix) {
            this.argent -= prix;
            console.log(`${this.nom} a payé ${prix} pour ${article.nom}.`);
        } else {
            console.log(`${this.nom} n'a pas assez d'argent pour acheter ${article.nom}.`);
        }
    },

    // Méthode pour couper un ingrédient avec un outil
    couper(ingredient, outil) {
        if (this.mainDroite.includes(outil) || this.mainGauche.includes(outil)) {
            console.log(`${this.nom} coupe ${ingredient} avec ${outil}.`);
        } else {
            console.log(`${this.nom} n'a pas ${outil} dans ses mains.`);
        }
    }
};


personnage.seDeplacer("la forêt");
personnage.payerArticle({ nom: "pain", prix: 5 });
personnage.mainDroite.push("couteau");
personnage.couper("carotte", "couteau");

//Créez un lieu "maison" avec les propriétés :

let maison = {
    nom: "maison",
    personnes: [],
};
console.log(maison);


//Créez un outil (couteau / mouleur) pour découper les ingrédients achetés avec les propriétés :

let couteau = {
    nom: "couteau",
    action: "couper",
};

console.log(couteau);

