ajaxGet("http://localhost/github/javascriptCoursExercices/ajaxJson/data/langages.txt", function (reponse) {
    console.log(reponse);
});

ajaxGet("http://localhost/github/javascriptCoursExercices/ajaxJson/data/films.json", function (reponse) {
    // Transforme la réponse en tableau d'objets JavaScript
    var films = JSON.parse(reponse);
    // Affiche le titre de chaque film
    films.forEach(function (film) {
        console.log(film.titre);
    })
});





