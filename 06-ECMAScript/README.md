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
const nombre = 10;
const nombre = 5;

let nombre2 = 10;
let nombre2 = 5;

console.log(nombre); // error 'nombre' has already been declared
console.log(nombre2); //
```