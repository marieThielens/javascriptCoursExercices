# Utilisez des API web

## Introduction

Une api est un ensemble de services offert par un logiciel à d'autres logiciels. Grâce aux API, les programmes informatiques peuvent interagir entre eux selon des conditions déterminées.

Pour pouvoir consommer (utiliser) une API web, il faut connaître son adresse et son mode de fonctionnement. La plupart des API web sont accessibles via une URL et utilisent <p style="green">le format JSON</p> pour les échanges de données.

## Testez une API web avec le navigateur

La première API que nous allons utiliser expose une liste d'articles, un peu à la manière d'un blog. Elle est accessible à l'URL https://oc-jswebsrv.herokuapp.com/api/articles et renvoie des données au format JSON.

<p style="color:red;">Pour une meilleure présentation du réslutat installer l'extension Postman pour chrome et RESTClient pour firefox</p>

Ouvrez l'application postman, on peut l'utiliser pour envoyer une requête HTTP GET vers l'URL de API et analyser en détail le résultat.

<img src="images/api1.png" style="width:50%;">

## Exploitez une API web avec javascript

- le fichier html
- le dossier js :
    - ajax.js (requête http, gestion des erreurs).
    - cours.js (requête).

Html :
```html
<!doctype html>

    <h1>Derniers articles</h1>
    <div id="articles">
    </div>

    <h1>Le Premier Ministre</h1>
    <div id="premMin">
    </div>

    <h1>La météo à Lyon</h1>
    <div id="meteo"></div>

    <script src="./js/ajax.js"></script>
    <script src="./js/cours.js"></script>

```
ajax.js
```js
// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
function ajaxGet(url, callback) {

    // L'objet JavaScript XMLHttpRequest permet de créer une requête HTTP
    var req = new XMLHttpRequest();

    req.open("GET", url);
    
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}
```
cours.js
```js
var articlesElt = document.getElementById("articles");
ajaxGet("https://oc-jswebsrv.herokuapp.com/api/articles", function (reponse) {
    // Transforme la réponse en un tableau d'articles
    var articles = JSON.parse(reponse);
    articles.forEach(function (article) {
        // Ajout du titre et du contenu de chaque article
        var titreElt = document.createElement("h2");
        titreElt.textContent = article.titre;
        var contenuElt = document.createElement("p");
        contenuElt.textContent = article.contenu;
        articlesElt.appendChild(titreElt);
        articlesElt.appendChild(contenuElt);
    });
});
```
