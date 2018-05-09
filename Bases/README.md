# Les bases en javascript

`parseInt(nombre1)` convertir en un nombre entier.
`parseFloat(nombre1)` convertir en un nombre décimal.

Variable : `var nomVariable = "texte";`
Concaténation : `document.write("Votre" + age);`
Ecrire dans l'html : `innerHTML`

## Fonctions

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

## Conditions

if :

```JS
if(age >=18){
    alert('Vous êtes mineur');
}
```

`isNan(nombre)` Si ce n'est pas un nombre

switch :

```JS
var nom = prompt("Entrez un nom d'animal");
switch(nom)
{
        case "chat": // valeur
                alert("Miaou !"); // instruction
                break; // sortir du switch
        case "chien":
                alert("Et PAF, le chien !");
                break;
        default:
                alert("Je n'ai rien à te dire...");
                break;
}

```

## Les boucles

Compter jusqu'à 10 :

- Avec while

```JS

var i = 1;      // on initialise le compteur
while(i < 10)   // tant que i<10 ...
{
    alert(i);// ... on affiche un message
    i++; // on incrémente
}

```

- Avec for

```JS
var i;  // on déclare notre variable
for(i=0; i<10; i++){
    alert(i);       // action
}

```

Avec do...while

```JS
do
{
        instructions
}
while(condition);

```

## Tableau

### Dernier élément d'un tableau

`var dernier = tableau[tableau.length - 1];`

### Parcourir un tableau

1. foreach() : permet d'exécuté une fonction sur chaque élément du tableau. Peu prendre plusieurs arguments

```JS

var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element);
    // expected output: "a"
    // expected output: "b"
    // expected output: "c"

  array1.forEach(function(item, index, array) {
  console.log(item, index);
    // expected output: "a 0"
    // expected output: "b 1"
    // expected output: "c 2"


});

```

`push()` Ajouter à la fin du tableau
`pop()` Supprimer le dernier élément du tableau
`shift()` Supprimer le premier élément du tableau
`unshift()` Ajouter au début du tableau
`ìndexOf()` Trouver l'index d'un élément dans le tableau
`splice()` Supprimer un élément par son index

```JS
var removedItem = fruits.splice(pos, 1); // supprime 1 élément à la position pos
````

