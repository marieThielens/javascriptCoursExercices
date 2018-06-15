# ECMAScript le language de demain

Votre navigateur n'est pas compatible ES6 ? Ce n'est pas un problème pour aujourd'hui ! Effectivement nous allons utiliser deux scripts qui vont nous transformer à la volée le code ES6 en code compatible avec votre navigateur.

Cette opération "magique" est réalisée par le compilateur Traceur, un outil mis au point par Google dont le but est de convertir le JavaScript de demain en JavaScript d'aujourd'hui. Il est disponible sous plusieurs formes (node, web). Ici nous utilisons la version web. Ainsi, tout le code JavaScript placé dans la balise script type="module" sera automatiquement converti à la volée.

```html
    <script src="https://google.github.io/traceur-compiler/bin/traceur.js"></script>
    <script src="https://google.github.io/traceur-compiler/src/bootstrap.js"></script>
    <script type="module">
        // Notre code ES6 ici
    </script>
```

## Déclaration de variable: var, const, let

En javascript il y a 3 façon de déclarer des variables : `var`, `let` et `const`.
Les variables avec `const` ne peuvent pas être réaffectées tandis que `let`, `var` le peuvent.

Exemple simple

```js
const personne = "Marie";
    personne = "Jonas"; // Va soulever une erreur, la personne ne peut pas être réaffectée.
```

```js
let personne = "Marie";
    personne = "Jonas"; 
console.log(personne); // "Jonas", la réaffectation est autorisée avec let
```

## let

On utilise let comme var (à la place) son ancêtre. La variable peut être réaffectée.
Le mot clé let permet de déclarer une variable limitée à la portée d'un bloc, c'est-à-dire qu'elle ne peut être utilisée que dans le bloc où elle a été déclarée (entre les {}) , ce qui n'est pas le cas avec var.

```js
var nombre = 10; // -> ici vaut 10
{
    let nombre = 2; // -> ici vaut 2
}
// -> ici vaut 10
```

### La portée de let (scope) 

```js
function first() {
  if(true) {
    let a = 5;  
  }
  console.log(a); // -> erreur
}
```

Avec une fonction, observez la différence entre `var` et `let`

```js
var i = 62;
for (var  i = 0; i < 10; i++) {
   console.log(i); // -> affiche les nombres de 0 à 9
}
console.log(i); // -> affiche 10

```

Scope de bloc avec let

```js
let i = 62;
for (let  i = 0; i < 10; i++) {
  console.log(i); // -> les nombres de 0 à 9
}
console.log(i); // -> 62
```

## const

Assignation unique, la valeur est constante, c'est à dire qu'on ne peut pas la changer. Comme pour un identifiant par exemple. On veut qu'il soit unique.

```js
// Avec const je ne peut pas modifier la valeur...............
const nombre = 1;
{
    const nombre = 9;
       // nombre = 8; -> Uncaught TypeError: Assignement to constant variable

    console.log(nombre); // -> 9
}
console.log(nombre); // -> 1

// const nombre = 5 ; -> error 'nombre' has already been declared .......


// Avec let je peux modifier la valeur...............
let nombre2 = 2;
{ // Ca marche aussi sans les brackets {}
    nombre2 = 8;
    console.log(nombre2); // -> 8
}
console.log(nombre2); // -> 8


// let nombre 2 = 8 ; -> nombre 2 has already been declared .......
```

- Avec let j'ai pu redéfinir la valeur de ma "varible". `nombre2 = 8;`
- Ave const non. `nombre = 8; -> Uncaught TypeError: Assignement to constant variable`

### const et les objets

Pour les objets crées avec `const`, on peut les modifier mais on ne peut pas leur assigner une nouvelle valeur.

```js
const x = { nom : "Marie"};
x.nom = "Codeuse";
``` 

Avec le code suivant j'obtiens une erreur

```js
const x = { nom : "Marie" };
x = { nom: "codeuse" };
```
On obtient une erreur car on essaie d’assigner une nouvelle valeur à x et const ne le permet pas.

## Flèches et lexical

Les flèches sont une fonction raccourcie utilisant la syntaxe => .

```js
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);

// Lexical this
var bob = {
  _name: "Bob",
  _friends: [],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
};
```

## Les classes

En réalité les classes sont juste des fonctions un peu spéciales.

### Déclarer une classe 

On déclare une classe avec le mot clé `class`. Les classes commencent par une lettre majuscule.

```js
class Rectangle { // Déclaration de la classe

    constructor(hauteur, largeur) { // Le constructeur (voir explication plus bas).
        this.hauteur = hauteur;
        this.largeur = largeur;
    }
}
```

### Les expressions de classes

Si on utilise un nom dans l'expression, ce nom ne sera accessible que depuis le corps de la classe via la propriété `name` (cette valeur ne sera pas directement accessible pour les instances).

```js
// anonyme
let Rectangle = class {
  constructor(hauteur, largeur) {
    this.hauteur = hauteur;
    this.largeur = largeur;
  }
};

// nommée
let Rectangle = class Rectangle {
  constructor(hauteur, largeur) {
    this.hauteur = hauteur;
    this.largeur = largeur;
  }
};
```

### Le corps de la classe, ses propriétés et ses méthodes

Le corps de la classe est la partie entre les accolades

- Le constructeur : est une méthode qui permet de créer et d'initialiser les objets. Attention il ne peut y avoir qu'un seul constructeur par classe. C'est un peu comme la carte d'identité de notre objet.
- Méthode de prototype :

```js
class Rectangle {
  constructor(hauteur, largeur) { // propriétés de l'instance
    this.hauteur = hauteur;
    this.largeur = largeur;
  }
 
  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.largeur * this.hauteur;
  }
}

const carré = new Rectangle(10, 10);

console.log(carré.area);
``` 

#### Créer une sous-classe avec extends

```js
class Animal { 
  constructor(nom) {
    this.nom = nom;
  }
  
  parle() {
    console.log(this.nom + ' fait du bruit.');
  }
}

class Chien extends Animal {
  constructor(nom) {
    // Si on déclare un constructeur dans une classe fille, on doit utiiser super() avant this.
    super(nom); // appelle le constructeur parent avec le paramètre
  }
  parle() {
    console.log(this.nom + ' aboie.');
  }
}
```

