# Javascript : DOM

<img src="../images/dom.jpg" style="width:40%;">

## Parcourir le DOM

Selecteur :

`document.getElementById(‘id’).innerHTML` permet de récupérer tout le contenu HTML d'un élément du DOM. (c’est une méthode) `<h1>ccoucou</h1>`
`textContent `: renvoi le texte d’un élément sans les balise HTML coucou
- `getElementsByClassName()`;
- `querySelectorAll(‘p’)`; A partir d’un sélecteur CSS (comme on le ferait dans le css).
- `querySelector(‘p’)` css le premier.
- `getElementsByTagName` : renvoie une liste des éléments qui portent le nom de la balise qui a été passée en paramètre lors de l’appel.

- `getAttribute` : renvoie la valeur de l’attribut passé en paramètre.
`Console.log(document.querySelector('a').getAttribute('href')); `
-> "https://monsite.com"
Certain attribut son accessibles directement : `id, href, value. querySelector(‘a’).href`

`.hasAttribute` : vérifie la présence de l’attribut. Par exemple y a t il bien un href ?
`.classList` : permet de récupérer la liste des classes d’un élément
`.contains` : la classe existe t elle sur cet élément ? 

## Le DOM

Accéder au DOM avec la variable document. `Var h = document.head;`

Les noeuds(node) :

2 types :
- les balises html -> `document.ELEMENT_NODE`
- le texte(contenu de la balise) -> `document.TEXT_NODE` ! Un espace ou retour à la ligne est un text_node

Chaque objet du DOM a une propriété nodeType qui indique son type.
`if (document.body.nodeType === document.ELEMENT_NODE) {  }`

Si body est un noeud de type élément.

`childNodes` : accéder aux enfants d’un noeud élément. ->`document.body.childNodes[1]`;
`parentNodes` : Retourne un Node qui est le parent de ce nœud. 
`lastChild` : Retourne un Node représentant le dernier nœud enfant direct de ce nœud
`nextSibling` : Retourne un Node représentant le nœud suivant dans l'arbre ou null s'il n'y en a pas.

Afficher les noeuds :
```JS
for (var i = 0; i < document.body.childNodes.length; i++) {
    console.log(document.body.childNodes[i]);
}
```

`getElementsByTagName` : renvoie une liste des éléments qui portent le nom de la balise qui a été passée en paramètre lors de l’appel.

`var titresElts = document.getElementsByTagName("h2");// Tous les titres h2`

## Modifier la structure de la page

`innerHTML` permet de récupérer tout le contenu HTML d'un élément du DOM mais peut être utilisé pour modifier le contenu HTML avec `+=` .  Exemple, rajouter un li à la balise ul.

```JS
// Modification du contenu HTML de la liste : ajout d'un langage
document.getElementById("idUl").innerHTML += '<li id="c">Je rajoute qq chose</li>';
// Vider un élément
document.getElementById("langages").innerHTML = "";
```

`setAttribute` définir un attribut (id, class, name, etc) : `document.querySelector("h1").setAttribute("id", "titre");`

## Ajouter un nouvel élément

```JS

var pythonElt = document.createElement("li"); // Création d'un élément li
pythonElt.id = "python"; // Définition de son identifiant
pythonElt.textContent = "Python"; // Définition de son contenu textuel
document.getElementById("langages").appendChild(pythonElt); // Insertion du nouvel élément

```

### Les classes

`classList` : pour ajouter ou supprimer des classes

```JS
a.classList.remove("nomClasse");
a.classList.add("nomClasse");
```

### Ajouter un nouvel élément

1. Création du nouvel élément.
2. Définition des informations de l'élément.
3. Insertion du nouvel élément dans le DOM.

```JS
var a = document.createElement("li"); // Création d'un élément li
a.id = "liMarie"; // Définition de son identifiant
a.textContent = "Un li de plus .."; // Définition de son contenu textuel
document.getElementById("langages").appendChild(a); // Insertion du nouvel élément en dernier 
```

`.appendChild()`: retourne un enfant en dernier (par rapport a son papa) -> `getElementById('papa').appendChild(a);`

Autre méthode : `createTextNode` Crée un nouveau noeud de type node

```JS
var a = document.createElement("li"); // Création d'un élément li
a.id = "ruby"; // Définition de son identifiant
a.appendChild(document.createTextNode("Ruby")); // Définition de son contenu textuel
document.getElementById("langages").appendChild(a); // Insertion du nouvel élément

```

`.inserBefore` : insérer un noeud avant un autre noeud. (au lieu que ce soit le dernier fils). On l'appelle sur le futur élément parent et on lui passe en paramètres le nouveau noeud ainsi que le noeud avant lequel le nouveau noeud sera inséré.

Exemple : ajoute le langage Perl avant le langage PHP dans la list.

```JS
var a = document.createElement("li"); // Création d'un élément li
a.id = "perl"; // Définition de son identifiant
a.textContent = "Perl"; // Définition de son contenu textuel
// Ajout du nouvel élément avant l'identifiant identifié par "php"
document.getElementById("langages").insertBefore(a, document.getElementById("php"));

```

Choix de la position exacte du nouveau noeud

`.ìnsertAdjacentHTML()`

`beforebegin` : avant l'élément existant lui-même
`afetbegin` : juste à l'intérieur de l'élément existant, avant son premier enfant.
`beforeend` : juste à l'intérieur de l'élément existant, après son dernier enfant.
`afterend` : après l'élément existant lui-même.

```JS
// Ajout d'un élément au tout début de la liste
document.getElementById('langages').insertAdjacentHTML("afterBegin", 
    '<li id="javascript">JavaScript</li>');
```

`.removeChild()`Supprimer un noeud existant

```JS
// Suppression de l'élément identifié par "bash"
document.getElementById("langages").removeChild(document.getElementById("bash"));
```