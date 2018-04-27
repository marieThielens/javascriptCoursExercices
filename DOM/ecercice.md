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
