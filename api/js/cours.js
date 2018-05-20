// Faire vibrer le téléphone ........................
function vibration(){
    navigator.vibrate([500, 250, 500, 250, 500, 250, 500, 250, 500, 250, 500]);   
}

// Afficher les notifications (marche pas sur le telephone) ..........

Notification.requestPermission().then(function(result) {
    console.log(result);
});


// Api 1 (connexion à des articles qui sont sur heroku)............
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

// API (connexion à api du premier ministre)...........

var premMinElt = document.getElementById("premMin");
// Accès aux informations publiques sur le Premier Ministre
ajaxGet("https://www.data.gouv.fr/api/1/organizations/premier-ministre/", function (reponse) {
    var premierMinistre = JSON.parse(reponse);
    // Ajout de la description et du logo dans la page web
    var descriptionElt = document.createElement("p");
    descriptionElt.textContent = premierMinistre.description;
    var logoElt = document.createElement("img");
    logoElt.src = premierMinistre.logo;
    premMinElt.appendChild(descriptionElt);
    premMinElt.appendChild(logoElt);
});


//   Facebook ............................................

// Vérifier l'état de connexion

// FB.getLoginStatus : méthode qui déclanche un appel vers facebook pour obtenir l'état de connexion
FB.getLoginStatus(function(response) {
    // Puis appelle les fonctions de rappel avec le resultat
    statusChangeCallback(response);
});


function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }













