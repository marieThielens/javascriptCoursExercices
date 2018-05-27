# Exercices sur les fonctions

1. Créez une fonction qui dit bonjour. Complétez le programme ci-dessous pour qu'il fasse saisir le prénom et le nom de l'utilisateur dans deux variables, puis affiche le résultat de l'appel à la fonctiondireBonjour().

```JS

function direBonjour(prenom, nom) {
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}
```

2. Complétez le programmecarre.js ci-dessous pour que la fonctioncarre() renvoie le carré d'un nombre passé en paramètre.

```JS

// Renvoie le carré d'un nombre
function carre(x) {
  // TODO : compléter le code de la fonction
}

console.log(carre(0)); // Doit afficher 0
console.log(carre(2)); // Doit afficher 4
console.log(carre(5)); // Doit afficher 25

```

3. Complétez le programme ci-dessous pour que la fonctioncalculer() gère les 4 opérations mathématiques de base : addition, soustraction, multiplication et division.

```JS
// TODO : écrire la fonction calculer()

console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity
```