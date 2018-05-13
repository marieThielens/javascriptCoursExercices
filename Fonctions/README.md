# Les Fonctions

Une fonction incluant une instruction return renvoie une valeur de retour lorsqu'elle est appelée : l'expression située immédiatement après le return.

```JS
function direBonjour(){
    return "Bonjour"; // Valeur de retour
}

```

ou 

```JS
fucntion direBonjour(){
    var message = "Bonjour";
    return message;
}
console.log(direBonjour());
```

## Paramètres

Un paramètre est une information dont une fonction a besoin pour jouer son rôle. Les paramètres d'une fonction sont définis entre parenthèses juste après le nom de la fonction. On peut ensuite utiliser leur valeur dans le corps de la fonction.

La valeur d'un paramètre est fournie au moment de l'appel de la fonction : on dit que cette valeur est passée en paramètre. On appelle argument la valeur donnée à un paramètre lors d'un appel.

```JS
function direBonjour(prenom) {
    var message = "Bonjour, " + prenom + " !";
    return message;
}

console.log(direBonjour("Marie"));
```