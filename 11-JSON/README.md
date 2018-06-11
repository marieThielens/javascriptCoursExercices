# JSON

JSON (Javascript Object Notation) est un format léger d'échange de données.

## Échange de données

Lors de l'échange de données entre un navigateur et un serveur, les données ne peuvent être que du texte.

JSON est du texte, et nous pouvons convertir n'importe quel objet JavaScript en JSON, et envoyer JSON au serveur.

Nous pouvons également convertir n'importe quel JSON reçu du serveur en objets JavaScript.

De cette façon, nous pouvons travailler avec les données en tant qu'objets JavaScript, sans analyse compliquée ni traductions.


### Envoyer les données

Si vous avez des données stockées dans un objet JavaScript, vous pouvez convertir l'objet en JSON et l'envoyer à un serveur:

```js
var monObjet = { "name":"Marie", "age":31, "ville":"Bruxelles"};
var monJSON = JSON.stringify(monObjet);
window.location = "demo_json.php?x=" + myJSON;
```

### Recevoir les données

Lorsqu'on recoit des données au format JSON il faut les convertir en objet Javascript :

```js
var monJSON = { "name":"Marie", "age":31, "ville":"Bruxelles"};
var myObj = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = myObj.name;
```