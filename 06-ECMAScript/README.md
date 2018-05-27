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


```js
function swap(x, y) {
    if (x != y) {
        var old = x;
        let tmp = x;
        x = y;
        y = tmp;
    }

    console.log(typeof(old));   // number
    console.log(typeof(tmp));   // undefined
}
```

## let

On utilise let comme var (à la place) son ancêtre.
Le mot clé let permet de déclarer une variable limitée à la portée d'un bloc, c'est-à-dire qu'elle ne peut être utilisée que dans le bloc où elle a été déclarée, ce qui n'est pas le cas avec var.