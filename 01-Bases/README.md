# Les bases en javascript

`parseInt(nombre1)` convertir en un nombre entier.
`parseFloat(nombre1)` convertir en un nombre décimal.

Variable : `var nomVariable = "texte";`
Concaténation : `document.write("Votre" + age);`
Ecrire dans l'html : `innerHTML`

## Conditions

booléen : true ou false. Exemple on veut savoir si l'utilisateur est majeur
`var majeur = true``
`&&` : et
`||`: ou

### if

```JS
if(age >=18){
    alert('Vous êtes mineur');
}
```

`isNan(nombre)` Si ce n'est pas un nombre

### switch :

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

### Avec while

```JS
var i = 1;      // on initialise le compteur
while(i < 10)   // tant que i<10 ...
{
    alert(i);// ... on affiche un message
    i++; // on incrémente
}
```

### Avec for

```JS
var i;  // on déclare notre variable
for(i=0; i<10; i++){
    alert(i);       // action
}

```

### Avec do...while

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

1. for : pour un tableau numéroté (un tableau simple)

2. foreach() : permet d'exécuté une fonction sur chaque élément du tableau. Peu prendre plusieurs arguments

```JS

var tableau = ['a', 'b', 'c'];

tableau.forEach(function(element) {
  console.log(element);
    // expected output: "a"
    // expected output: "b"
    // expected output: "c"

  tableau.forEach(function(item, index, array) {
  console.log(item, index);
    // expected output: "a 0"
    // expected output: "b 1"
    // expected output: "c 2"

for(var element in tableau){
    conslole.log(tableau[element]);
}

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

