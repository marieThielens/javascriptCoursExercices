ajaxGet("http://localhost/github/javascriptCoursExercices/ajaxJson/data/langages.txt", function (reponse) {
    console.log(reponse);
});

ajaxGet("http://localhost/github/javascriptCoursExercices/ajaxJson/data/films.json", function (reponse) {
    // Transforme la réponse en tableau d'objets JavaScript
    var films = JSON.parse(reponse);
    // Affiche le titre de chaque film
    films.forEach(function (film) {
        console.log(film.titre);
    });
});

ajaxGet("http://localhost/github/javascriptCoursExercices/ajaxJson/data/tableaux.json", function (reponse) {

    var tableaux = JSON.parse(reponse);

    var tableauxElt = document.getElementById("tableaux");

    tableaux.forEach(function (tableau) {
        // Créer une ligne pour le titre


        // Crée une ligne de tableau HTML pour chaque tableau
        var ligneElt = document.createElement("tr");
        ligneElt.innerHTML = "<td>" + tableau.nom + "</td>" + "<td>" + tableau.annee + "</td>" +
            "<td>" + tableau.peintre + "</td>";
        
        tableauxElt.appendChild(ligneElt);
    });
});





