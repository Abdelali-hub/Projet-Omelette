//Créez un objet personnage avec les propriétés et méthodes suivantes :
// Définition de l'objet personnage
let personnage = {
    nom: "Abdelali", 
    lieu: "Bruxelles",      
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
maPoele = new Poele("Poêle à frire");
maPoele.ajouterIngredient("carottes");
maPoele.ajouterIngredient("pommes de terre");
maPoele.cuire();

//Créez un objet  bol avec les attribut suivant:

let bol = {
    contenu: [], 

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

bol.contenu = [
    { nom: 'farine', etat: 'sec', prix: 2 },
    { nom: 'sucre', etat: 'sec', prix: 1 }
];

console.log('Avant le mélange:', bol.contenu);

bol.melanger('pâte à gâteau');

console.log('Après le mélange:', bol.contenu);

//Methode
class Poele {
    constructor() {
        this.contenu = []; // Contenu initial de la poêle
    }

    cuire() {
        setTimeout(() => {
            if (this.contenu.length > 0) {
                this.contenu[0].etat = 'cuit'; 
            }
            this.contenu = [newMelange]; 
        }, 4000);
    }
}


let maPoele = new Poele();
maPoele.contenu.push({ etat: 'cru' }); 
let newMelange = { etat: 'préparé' }; 

maPoele.cuire(); 

//Pour indiquer que le personnage est à la maison :

//Utilisez la méthode seDeplacer avec l'objet maison en paramètre.

// Indique que le personnage est à la maison
personnage.seDeplacer(maison);

// Affiche "Abdelali se déplace vers la maison."
console.log(personnage.nom + " est actuellement à la " + personnage.lieu);
    
   
//Pour aller à l'épicerie acheter les ingrédients pour l'omelette :
personnage.seDeplacer(epicerie);

// Supposons que l'épicerie a une méthode pour récupérer un panier
let panier = epicerie.récupérerPanier(); 
personnage.mainDroite = panier; 
console.log(personnage.nom + " a pris un panier pour faire ses courses.");


//Créez une boucle qui prend chaque élément (ingrédient) du contenu de l'épicerie (1 à 1) et en fait une COPIE dans le panier du personnage.
for (let i = 0; i < epicerie.ingredients.length; i++) {
    let ingredient = epicerie.ingredients[i];
    panier.contenu.push(Object.assign({}, ingredient));
    console.log(`${ingredient.nom} a été ajouté au panier.`);
}

//Créez une méthode dans l'épicerie qui permet de payer les articles du panier du personnage et de vider son panier si le paiement est accepté.
epicerie.payerPanier = function(personnage) {
    let total = 0;
    for (let i = 0; i < personnage.mainDroite.contenu.length; i++) {
        total += personnage.mainDroite.contenu[i].prix;
    }
    if (personnage.argent >= total) {
        personnage.argent -= total;
        personnage.mainDroite.contenu = [];
        console.log(`${personnage.nom} a payé ${total} pour ses achats.`);
    } else {
        console.log(`${personnage.nom} n'a pas assez d'argent pour payer.`);
    }
};

//Retournez à la maison (pour pouvoir cuisiner) :
personnage.seDeplacer(maison);
console.log(personnage.nom + " est actuellement à la " + personnage.lieu);

//Mettez chaque ingrédient dans le bol (1 à 1 avec une boucle) :
for (let i = 0; i < panier.contenu.length; i++) {
    let ingredient = panier.contenu[i];
    bol.contenu.push(ingredient);
    console.log(`${ingredient.nom} a été ajouté au bol.`);
}

//Retournez à l'épicerie pour rapporter le panier :
personnage.seDeplacer(epicerie);
console.log(personnage.nom + " est actuellement à l'" + personnage.lieu);

//Retournez à la maison pour continuer l'omelette :
personnage.seDeplacer(maison);
console.log(personnage.nom + " est actuellement à la " + personnage.lieu);

//Vérifiez chaque ingrédient dans le bol et le coupez seulement s'il est entier avec la méthode couper de la personne.
couperIngredient = function(ingredient, outil) {
    console.log(`${personnage.nom} coupe ${ingredient.nom} avec ${outil.nom}.`);
    ingredient.etat = 'coupé';
}

