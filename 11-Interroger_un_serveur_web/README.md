# Interroger un serveur web

## Installer un serveur web local

On va utiliser Apache. WAMP sous windows, MAMP et XAMPP

Afin de pouvoir interroger notre serveur sans restriction, nous allons modifier la configuration du serveur Apache en autorisant toutes les requêtes cross-domain. ! Attention : à faire seulement quand on est en local.

Modifier le fichier `httpd.conf` et recherchez cette ligne.
`LoadModule headers_module modules/mod_headers.so`

Cette ligne permet d'activer le module Apache de personnalisation des en-têtes de requêtes HTTP. Elle ne doit pas commencer par un caractère#(qui place la suite de la ligne en commentaire). Si c'est le cas, supprimez le caractère#.Ensuite, ajoutez les lignes suivantes à la fin du fichier.

```conf
<IfModule mod_headers.c>
    # Accept cross-domain requests
	Header always set Access-Control-Allow-Origin "*"
</IfModule>
```
Sauvegardez et puis relancez Apache

## Publication des ressources sur le serveur

Nous allons utiliser Apache pour publier localement deux fichiers auxquels nous accèderons ensuite depuis nos pages web.

- Créez un fichier index.html
- Créez un dossier data
- Dans le dossier data mettre le fichier langages.txt et films.json
- Rajoutez ce code dans l'html ou dans un fichier .js

```html
<script>
// Création d'une requête HTTP
var req = new XMLHttpRequest();
// Requête HTTP GET synchrone vers le fichier langages.txt publié localement
req.open("GET", "http://localhost/github/javascriptCoursExercices/11-Interroger_un_serveur_web/data/langages.txt", false);
// Envoi de la requête
req.send(null);
// Affiche la réponse reçue pour la requête
console.log(req.responseText);
</script>
```

-> Maintenant le contenu du fichier texte s'affiche dans la console.

- L'objet `XMLHttpRequest` permet de créer des requêtes HTTP en JavaScript.
- Sa méthode `open` permet de configurer la requête HTTP avant son lancement. Elle prend en paramètres le type de requête HTTP (le plus souvent `GET`, `POST` ou `PUT` ).
- `send` envoie la requête vers l'URL cible.
- La quatrième ligne affiche dans la console du navigateur la réponse reçue du serveur, c'est-à-dire le contenu du fichier `langages.txt` récupéré par la requête.

### La même requête mais de façon asynchrone + gestion des erreurs

Une requête HTTP synchrone bloque le programme appelant jusqu'à ce que la réponse soit disponible, ce qui peut prendre un certain temps.

```js
// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
function ajaxGet(url, callback) {
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
function afficher(reponse) {
    console.log(reponse);
}

ajaxGet("http://localhost/github/javascriptCoursExercices/11-Interroger_un_serveur_web/data/langages.txt", afficher);
```