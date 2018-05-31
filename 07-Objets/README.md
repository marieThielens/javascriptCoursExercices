# Les objets

Un objet est avant tout une classe. Une classe est un 'template/carte d'identité' qui définit ce qu'il y a l'intérieur de l'objet.
Jusqu'ici, vous avez appris à créer des programmes plutôt basés sur des fonctions : c'est ce que l'on appelle parfois la programmation procédurale.

cette classe contient :

- Des variables = appelées attributs ou propriétés qui caractérise l'objet
- Des fonctions = appelées méthodes, qui permettront (entre autre) d'agir sur cet objet.

Cet objet possède des propriétés. Imaginons que dans la vraie vie on ai un objet, un stylo par exemple. Il peut avoir des propriétés différentes : couleur, marque, prix etc..

## Introduction

### Si on a 1 seul objet on peut utiliser la notation litérale :

```js
var stylo = {
    type: "bille",
    couleur: "bleu",
    marque: "Bic"
};
console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);
```

- Modifier l'objet : `stylo.couleur = "vert";`
- Ajouter un objet : `stylo.prix = 2.17;`

### Créer un objet

```js
var monStylo = new Object();
    monStylo.type = "bille";
    monStylo.couleur = "bleu";
    monStylo.marque = "Bic";
```

On peut aussi définir ou accéder à des propriétés JavaScript en utilisant une notation avec les crochets.

```js
monStyle["type"] = "bille";
```

Il a donc 3 propriétés. 

## Créer un objet à partir d'un constructeur : utiliser une fonction

n constructeur est une fonction particulière dont le rôle est d'initialiser un nouvel objet. Son nom commence souvent par une lettre majuscule, mais ce n'est pas une obligation.

La création de l'objet à partir du constructeur est appelée l'instanciation. Elle s'effectue à l'aide du mot-clé `new` .

```js
// Constructeur MonObjet
function stylo (type, couleur, marque) { // les propriétés de l'objet
    // Initialisation de l'objet
    this.type = type;
    this.couleur = couleur;
    this.marque = marque;
}
// Instanciation d'un objet à partir du constructeur
var bicDeMarie = new stylo("bille", "bleu", "bic");

```

On utilise `this`  pour affecter des valeurs aux propriétés d'un objet en fonction des valeurs passées en arguments de la fonction.