# Exercices sur le DOM

1) Gestion des attributs

```PHP

    <h1>Quelques instruments de musique</h1>
    <ul>
        <li id="clarinette" class="vent bois">
            La <a href="https://fr.wikipedia.org/wiki/Clarinette">clarinette</a>
        </li>
        <li id="saxophone" class="vent bois">
            Le <a href="https://fr.wikipedia.org/wiki/Saxophone">saxophone</a>
        </li>
        <li id="trompette" class="vent cuivre">
            La <a href="https://fr.wikipedia.org/wiki/Trompette">trompette</a>
        </li>
        <li id="violon" class="cordes frottees">
            Le <a href="https://fr.wikipedia.org/wiki/Violon">violon</a>
        </li>
    </ul>

```

1. Dis moi le nombre de lien qu'il y a dans la page.
2. Affiche moi le premier lien.
3. Refais le moi mais avec une fonction. Affiche aussi le dernier lien (même si tu rajoutes des liens il prendra toujours le 1er).

2) Afficher si un élément possède une classe

Ajoutez à la fin du script le code suivant

```JS
possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher false

```

3) Créer un nouvel élément :

html :

```HTML
<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>Quelques journaux en ligne</title>
</head>

<body>
    <h1>Quelques journaux en ligne</h1>
    <div id="contenu"></div>

    <script src="../js/journaux.js"></script>
</body>

</html>
```

js :

```JS
// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"
```

Aide :

1. Faire une boucle sur le tableau
2. Créer un élément a
3. rajouter du texte pour chaque élément du tableau
4. transformer ce texte en href

5. Créer un enfant à #contenu
6. Créer un enfant br