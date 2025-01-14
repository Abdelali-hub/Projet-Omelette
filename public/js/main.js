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


//Créez des produits (ingrédients) à mettre dans le magasin qui serviront à créer l'omelette (oignon, oeuf, epice, fromage, ...) avec les propriétés :

//Liste des Ingrédients
let oignon = {
    nom: "oignon",
    etats: ["entier", "coupé", "caramélisé"],
    prix: 0.50,
};
console.log(oignon);

let oeuf = {
    Nom: "Œuf",
    etats: ["entier", "battu", "cuit"],
    Prix: 0.30,
};
console.log(oeuf);

let epice = {
    Nom: "Épice",
    États: ['entier', 'moulu'],
    Prix: 0.20,
};
console.log(epice);

let Fromage = {
    Nom: "Fromage",
    États: ["entier", "râpé", "fondu"],
    Prix: 1.00,
};
console.log(Fromage);

let Poivron = {
    Nom: "Poivron",
    États: ["entier", "coupé", "grillé"],
    Prix: 0.70,
};
console.log(Poivron);
    
let Tomate = {
    Nom: "Tomate",
    États: ["entière", "coupée", "concassée"],
    Prix: 0.60,
};
console.log(Tomate);

let Herbes = {
    Nom: "Herbes",
    États: ["fraîches", "séchées", "hachées"],
    Prix: 0.40,
};
console.log(Herbes);

let Lait = {
    Nom: Lait,
    États: ["liquide", "épaissi"],
    Prix: 0.50,
}
console.log(Lait);

let Bacon = {
    Nom: "Bacon",
    États: ["entier", "cuit", "coupé"],
    Prix: 1.50,
}
console.log(Bacon);

let Champignon = {
    Nom: "Champignon",
    États: ["entier", "coupé", "sauté"],
    Prix: 0.80,
}
console.log(Champignon);

//Créez un lieu "epicerie" avec les propriétés :

let epicerie = {
    nom: "Mon Épicerie",
    personnes: [],
    paniers: [
        {
            type: "panier",
            contenu: []
        }
    ],
    ingredients: [
        // Liste des ingrédients créés précédemment
    ]
};
console.log(epicerie);

//créer un outile (poële).

class Poele {
    constructor(nom) {
        this.nom = nom; 
        this.contenu = []; 
    }

    // Méthode pour cuire les ingrédients
    cuire() {
        if (this.contenu.length === 0) {
            console.log("La poêle est vide. Ajoutez des ingrédients à cuire.");
        } else {
            console.log(`Cuisson des ingrédients : ${this.contenu.join(", ")}`);
            // Simuler la cuisson
            this.contenu.forEach(ingredient => {
                console.log(`${ingredient} est en train de cuire...`);
            });
            console.log("Cuisson terminée !");
        }
    }

    // Méthode pour ajouter des ingrédients à la poêle
    ajouterIngredient(ingredient) {
        this.contenu.push(ingredient);
        console.log(`${ingredient} a été ajouté à la poêle.`);
    }
}

// Exemple d'utilisation
let maPoele = new Poele("Poêle à frire");
maPoele.ajouterIngredient("carottes");
maPoele.ajouterIngredient("pommes de terre");
maPoele.cuire();

//Créez un objet  bol avec les attribut suivant:

let bol = {
    contenu: [], // Tableau d'ingrédients

    // Méthode pour mélanger les ingrédients
    melanger: function(nomDuMelange) {
        // Remplacement du contenu par un nouvel ingrédient
        this.contenu = [{
            nom: nomDuMelange,
            etat: 'pas cuit',
            prix: 0
        }];
    }
};

// Exemple d'utilisation
bol.contenu = [
    { nom: 'farine', etat: 'sec', prix: 2 },
    { nom: 'sucre', etat: 'sec', prix: 1 }
];

console.log('Avant le mélange:', bol.contenu);

// Appel de la méthode melanger
bol.melanger('pâte à gâteau');

console.log('Après le mélange:', bol.contenu);


