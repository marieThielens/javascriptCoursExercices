# Envoyer des données à un serveur web

## Preparer Apache(le serveur)

Il doit être modifié pour qu'il accepte que le client définisse le format du contenu envoyé. C'est indispensable pour que nous puissions lui envoyer des données au format JSON.

Éditez le fichier `httpd.conf` et modifiez la balise `<IfModule />` précédemment insérée à la fin du fichier pour y ajouter la ligne suivante.

`Header always set Access-Control-Allow-Headers "Content-Type"`

On obtien :

```conf
<IfModule mod_headers.c>
	# Accept cross-domain requests
	Header always set Access-Control-Allow-Origin "*"
	Header always set Access-Control-Allow-Headers "Content-Type"
</IfModule>
```

## Ajout du code serveur

dans votre dossier copiez :

- le fichier post_form.php
- le fichier post_json.php

Ces deux fichiers gère les données envoyer au serveur.

## Let's go

Créez un fichier cours.html et mettre ce code :

```html
<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>Envoyer des données</title>
</head>

<body>
    <h3>Qui est le plus fort ?</h3>
    <form>
        <p>
            <input type="radio" name="plusFort" id="elephant" value="ELE" checked>
            <label for="elephant">L'éléphant</label>
            <br>
            <input type="radio" name="plusFort" id="rhinoceros" value="RHI">
            <label for="rhinoceros">Le rhinocéros</label>
            <br>
            <input type="radio" name="plusFort" id="hippopotame" value="HIP">
            <label for="hippopotame">L'hippopotame</label>
            <br>
        </p>
        <p>
            <label for="nom">Votre nom</label> :
            <input type="text" name="nom" id="nom" required>
        </p>

        <input type="submit" value="Votez">
    </form>

    <script src="../js/ajax.js"></script>
    <script src="../js/cours.js"></script>
</body>

</html>
```

Ensuite créez un fichier cours.js et copiez ce code dedans

```js
// Création d'un objet FormData
var identite = new FormData();
// Ajout d'information dans l'objet
identite.append("login", "Bob");
identite.append("password", "azerty");
// Création et configuration d'une requête HTTP POST vers le fichier post_form.php
var req = new XMLHttpRequest();
req.open("POST", "http://localhost/github/javascriptCoursExercices/12-Envoyer_des_donnees_a_un_serveur_web/post_form.php");
// Envoi de la requête en y incluant l'objet
req.send(identite);
```

`FormData()` : objet qui envoie vers le serveur
`append` : Méthode qui prend en paramètre le nom et la valeur de la donnée ajoutée.

- Ouvrez votre navigateur sur cours.js
- Ouvrez votre fichier post_form.log et vous allez voir apparaître 

```log
Array
(
    [login] => Bob
    [password] => azerty
)
```

Pour l'intsant notre code ne gère ni le résultat ni les erreurs. Copiez ceci dans le fichier ajax.js

```js
// Exécute un appel AJAX POST
// Prend en paramètres l'URL cible, la donnée à envoyer et la fonction callback appelée en cas de succès
function ajaxPost(url, data, callback) {
    var req = new XMLHttpRequest();
    req.open("POST", url);
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
    req.send(data);
}
```

`data` un paramètre : il sagit de la donnée transmmise

## Gérer l'envoi du formulaire

L'objet `FormData`est de simplifier la soumission d'un formulaire avec AJAX. Ajoutez ceci à cours.js

```js
var form = document.querySelector("form");
// Gestion de la soumission du formulaire
form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Récupération des champs du formulaire dans l'objet FormData
    var data = new FormData(form);
    // Envoi des données du formulaire au serveur
    // La fonction callback est ici vide
    ajaxPost("http://localhost/github/javascriptCoursExercices/12-Envoyer_des_donnees_a_un_serveur_web/post_form.php", data, function () {});
});

```

- Remplissez le formulaire
- form_log.php contient maintenant les données du formulaire

## Envoyer des données JSON

Voici le code à mettre à la place de l'autre dans le fichier ajax.js

```js
// Exécute un appel AJAX POST
// Prend en paramètres l'URL cible, la donnée à envoyer et la fonction callback appelée en cas de succès
// Le paramètre isJson permet d'indiquer si l'envoi concerne des données JSON
function ajaxPost(url, data, callback, isJson) {
    var req = new XMLHttpRequest();
    req.open("POST", url);
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
    if (isJson) {
        // Définit le contenu de la requête comme étant du JSON
        req.setRequestHeader("Content-Type", "application/json");
        // Transforme la donnée du format JSON vers le format texte avant l'envoi
        data = JSON.stringify(data);
    }
    req.send(data);
}
```

Testons les modifications : rajoutez ceci dans le fichier cours.js

```js
// Création d'un objet représentant un film
var film = {
    titre: "Zootopie",
    annee: "2016",
    realisateur: "Byron Howard et Rich Moore"
};
// Envoi de l'objet au serveur
ajaxPost("http://localhost/github/javascriptCoursExercices/12-Envoyer_des_donnees_a_un_serveur_web/post_json.php", film,
    function (reponse) {
        // Le film est affiché dans la console en cas de succès
        console.log("Le film " + JSON.stringify(film) + " a été envoyé au serveur");
    },
    true // Valeur du paramètre isJson
);
```
