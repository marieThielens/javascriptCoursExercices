# AJAX et JSON

## Ajax

Ajax(Asybchrone Javascript AEXML)

- Permet de mettre à jour une page sans la recharger
- Demander/recevoir/envoyer des données à un serveur

### Comment ça fonctionne ? 

1. Un événement se produit dans une page Web (la page est chargée, un bouton est cliqué)
2. Un objet XMLHttpRequest est créé par JavaScript
3. L'objet XMLHttpRequest envoie une requête à un serveur Web
4. Le serveur traite la demande
5. Le serveur envoie une réponse à la page Web (reponseText)
6. La réponse est lue par JavaScript
7. L'action appropriée (comme la mise à jour de la page) est effectuée par JavaScript

```html
<div id="demo">
    <h2>Let AJAX change this text</h2>
    <button type="button" onclick="loadDoc()">Change Content</button>
</div>

<script>
function loadDoc() {
  var xhttp = new XMLHttpRequest(); // crée l'objet qui echange des données avec un serveur
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}
```

Lorsqu'on utilise la méthode POST il faut absolument changer le type MIME de la requête avec la méthode `setRequestHeader`

```js
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
```

### Passer des variables

Avec GET les variables sont transmises directement dans l'url:

```js
xhr.open("GET", "handlingData.php?variable1=truc&variable2=bidule", true);
xhr.send(null);
```

Pour POST il faut spécifier les variables dans l'arguement `send``

```js
xhr.open("POST", "post.php", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send("variable1=truc&variable2=bidule");
```

Vous pouvez tester ce code avec le fichier index.html

| Méthode                  | Description                                                                                                                                                     | Exemple                                                                       |
|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| open(method, url, async) | Prend 3 paramètre : La méthode d'envoi, l'url/chemin vers le fichier/url  qui reçoit la requête, true = asynchrone (ne bloque pas le script si pas de réponse)  | ajax.open("POST", 'core/request.php', true);                                  |
| send()                   | Envoyer au serveur                                                                                                                                              | ajax.send();                                                                  |
| setRequestHeader()       | Quand on envoie un formulaire, pour les POST, cet en-tête spécifie les données envoyé avec send                                                                                | xhttp.setRequestHeader("Content-type",  "application/x-www-form-urlencoded"); |
| new XMLHttpRequest()     | Objet qui permet de faire des requêtes                                                                                                                          | var ajax = new XMLHttpRequest();                                              |
| getResponseHeader()      | Retourne les infos de l'en-tête http                                                                                                                            |                                                                               |
| PROPRIETE                |                                                                                                                                                                 |                                                                               |
| onreadystatechange       | Regarde le status de la requête (finie?, erreur?)                                                                                                               | ajax.addEventListener('readystatechange', function(){}};                      |
| readyState               | Le statut de la requête. 1 = connecté au serveur. 4 = finie et prête                                                                                            | (if ajax.readyState === 4)                                                    |
| reponseText              | renvoie la réponse du serveur en tant que chaîne JavaScript                                                                                                     | a.innerHTML = xhttp.responseText;                                             |
| status                   | Retourne un nombre sur le statut de la requête. 200 = OK, 404 not Found                                                                                         | (if ajax.status === 200 )                                                     |

## JSON

JSON (Javascript Object Notation) est un format léger d'échange de données.

### Échange de données

Lors de l'échange de données entre un navigateur et un serveur, les données ne peuvent être que du texte.
JSON est du texte, et nous pouvons convertir n'importe quel objet JavaScript en JSON, et envoyer JSON au serveur.
Nous pouvons également convertir n'importe quel JSON reçu du serveur en objets JavaScript.
De cette façon, nous pouvons travailler avec les données en tant qu'objets JavaScript, sans analyse compliquée ni traductions.

En JSON, les valeurs de chaîne doivent être écrites avec des guillemets doubles:

```{"name":"Marie"}```

#### Envoyer les données

Si vous avez des données stockées dans un objet JavaScript, vous pouvez convertir l'objet en JSON et l'envoyer à un serveur:

```js
var monObjet = { "name":"Marie", "age":31, "ville":"Bruxelles"};
var monJSON = JSON.stringify(monObjet);
window.location = "demo_json.php?x=" + myJSON;
```

`stringify` : transforme un objet javascript 

#### Recevoir les données

Lorsqu'on recoit des données au format JSON (texte) il faut les convertir en objet Javascript :

```js
var monJSON = { "name":"Marie", "age":31, "ville":"Bruxelles"};
var monObj = JSON.parse(monJSON);
document.getElementById("demo").innerHTML = monObj.name;
```

`parse` : transforme un format JSON (texte) en objet javascript

#### JSON depuis le serveur

```js

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = myObj.name;
    }
};
xmlhttp.open("GET", "json_demo.txt", true);
xmlhttp.send();

```