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


