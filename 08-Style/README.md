# Donnez du style à vos éléments

la propriété style

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Les styles avec JavaScript</title>
</head>

<style>
    #para {
    font-style: italic;
    color: blue;
}
</style>

<body>
    <p>Primo...</p>
    <p style="color: green;">Secundo...</p>
    <p id="para">Tertio...</p>

    <script>
    var pElt = document.querySelector("p");
        pElt.style.color = "red";
        pElt.style.margin = "50px";
    </script>
</body>
</html>

```

Certaines propriétés CSS s'écrivent sous la forme d'un nom composé. Pour utiliser ces propriétés en JavaScript, il faut supprimer le tiret et écrire la première lettre du mot suivant en majuscule.

```js
pElt.style.fontFamily = "Arial";
pElt.style.backgroundColor = "black";
```