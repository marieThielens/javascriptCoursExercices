# Memento

|                          | Explication                                                            | Démonstration                                                                                |
|--------------------------|------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| parseInt(nombre1)        | Converti en nombre entier                                              | var a = parseInt("10.33") -> 10                                                              |
| parseFloat(nombre1)      | Converti en nombre décimal                                             |                                                                                              |
| .innerHTML               | Ecrire dans l'html/vider un contenu html                               | a.innerHTML+= "ajout texte";                                                                 |
| Math.random()            | nombre aléatoire entre 0 et 1                                          | -> 0.879789797                                                                               |
| Math.floor()             | Arrondi                                                                |                                                                                              |
| querySelector(''li a ")  | Sélécteur css                                                          |                                                                                              |
| getElementByTagName("p") | Renvoie toutes les balise                                              |                                                                                              |
| document.ELEMENT_NODE    | les balises html                                                       |                                                                                              |
| document.TEXT_NODE       | Le texte (contenu de la balise)                                        |                                                                                              |
| .childNodes              | Accéder aux enfants d'un noeud choisi                                  | document.body.childNodes[1]                                                                  |
| .parentNodes             | Retourne un Node qui est le parent de ce nœud.                         |                                                                                              |
| .lastChild               | Retourne un Node représentant le dernier nœud enfant direct de ce nœud |                                                                                              |
| .nextSibling             | Retourne un Node représentant le nœud suivant dans l'arbre.            |                                                                                              |
| .createElement("li")     | Créer un élément                                                       | var a = document.createElement("li");                                                        |
| .textContent             | Le texte sans les balises. Permet de modifier le texte                 | a.textContent = "un li de plus"; titre.textContent += "ajout de mot dans le titre";          |
| .appendChild()           |                                                                        |                                                                                              |
| .setAttribute()          | définir un attribut (id, class, name, etc)                             | document.querySelector("h1").setAttribute("id", "titre");                                    |
| .classList()             | Pour ajouter ou supprimer des classes                                  | a.classList.remove("nomClasse"); a.classList.add("nomClasse");                               |
| .appendChild()           | Ajouter un enfant en dernier (par rapport au papa)                     | getElementById('papa').appendChild(a);                                                       |
| .createTextNode()        | Crée un nouveau noeud de type node                                     | a.appendChild(document.createTextNode("Ruby"));                                              |
| .insertBefore()          | Insérer un noeud avant un autre noeud                                  | document.getElementById("papa").insertBefore(a, document.getElementById("liSuivant"));       |
| .insertAdgacentHTML()    | Choix de la position exacte d'un nouveau noeud                         | document.getElementById('langages').insertAdjacentHTML("afterBegin", '<li>JavaScript'</li>); |
| .removeChild()           | Supprimer un noeud existant                                            | document.getElementById("langages").removeChild( document.getElementById("bash"));           |
|                          |                                                                        |                                                                                              |
|                          | dernier élément du tableau                                             | var dernier = tableau[tableau.length - 1];                                                   |
| foreach()                | Parcourir un tableau avec une fonction                                 | array1.forEach(function(item, index, array) {,console.log(item, index);,});                  |
| push()                   | Ajouter à la fin du tableau                                            | array.push('quelque chose');                                                                 |
| pop()                    | Supprimer le dernier élément du tableau                                | array.pop();                                                                                 |
| shift()                  | Supprimer le premier élément du tableau                                |                                                                                              |
| unshift()                | Ajouter au début du tableau                                            | array.unshift("quelque chose");                                                              |
| indexOf()                | Trouver l'index d'un élément dans le tableau                           | array.indexOf('banane'); -> 2                                                                |
| splice()                 | Supprimer un élément par son index                                     | fruits.splice(pos, 1); ->supprime 1 élément à la position pos                                |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |
|                          |                                                                        |                                                                                              |