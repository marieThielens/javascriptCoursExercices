# Javascript : Parcourir le DOM

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