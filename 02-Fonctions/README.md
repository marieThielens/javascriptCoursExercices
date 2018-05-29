# Les Fonctions

Une fonction incluant une instruction return renvoie une valeur de retour lorsqu'elle est appelée : l'expression située immédiatement après le return.

```JS
function direBonjour(){
    return "Bonjour"; // Valeur de retour
}

```

ou 

```JS
function direBonjour(){
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

### Fonction native

```JS
var message = prompt('Entrez un texte');
```

- On appelle la fonction prompt()
- On lui fournit un seul argument, qui est 'Entrez un texte' (c'est le message d'invite qui sera affiché dans la boîte de dialogue).
- Cette fonction nous renvoie le texte saisi par l'utilisateur, qu'on enregistre ici dans la variable message.

### Notre fonction

Déclarer et appeler une fonction

- on dit que l'on déclare une fonction lorsqu'on la "crée" : on dit à l'ordinateur qu'elle existe et ce qu'elle doit faire (on écrit le code de cette fonction).
- On pourra ensuite appeler notre fonction, ce qui veut dire qu'on va lui demande d'exécuter son code.

```JS
function direBonjour() {// Déclaration de la fonction
    console.log("Bonjour !");
}
direBonjour(); // Appel de la fonction
```

#### Les arguments

**return** : L'instruction return met fin à l'exécution d'une fonction et définit une valeur à renvoyer à la fonction appelante.

- fonction qui additionne 2 nombres :

```JS
function addition (nbr1, nbr2){ //Déclaration de la fonction avec deux arguments
    return nbr1 + nbr2;
}
var calcul1 = addition(5,10);
```

- fonction qui donne un nombre aléatoire (ici comme un dé)

```JS
function nb_aleatoire(min, max)
{
     var nb = min + (max-min+1)*Math.random(); //Math.random: nombre aléatoire entre 0 et un (1 est exclu) ex:0.546587546
     return Math.floor(nb); //Math.floor: arrondi
}
var de = nb_aleatoire(1, 6);
alert("Vous lancez un dé et obtenez " + de);

```