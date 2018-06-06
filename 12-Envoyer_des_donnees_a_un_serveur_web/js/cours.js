// // Création d'un objet FormData
// var identite = new FormData();
// // Ajout d'information dans l'objet
// identite.append("login", "Bob");
// identite.append("password", "azerty");
// // Création et configuration d'une requête HTTP POST vers le fichier post_form.php
// var req = new XMLHttpRequest();
// req.open("POST", "http://localhost/github/javascriptCoursExercices/12-Envoyer_des_donnees_a_un_serveur_web/post_form.php");
// // Envoi de la requête en y incluant l'objet
// req.send(identite);

var commande = new FormData();
commande.append("couleur", "rouge");
commande.append("pointure", "43");
// Envoi de l'objet FormData au serveur
ajaxPost("http://localhost/github/javascriptCoursExercices/12-Envoyer_des_donnees_a_un_serveur_web/post_form.php", commande,
    function (reponse) {
        // Affichage dans la console en cas de succès
        console.log("Commande envoyée au serveur");
    }
);