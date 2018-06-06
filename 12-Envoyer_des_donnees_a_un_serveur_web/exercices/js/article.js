var form = document.querySelector("form");

    form.addEventListener("submit", function(e) 
    {
    e.preventDefault();
    var article = new FormData(form);
    ajaxPost("https://oc-jswebsrv.herokuapp.com/article", article, function(reponse) 
        {
            var message = document.createElement("p");
            message.textContent = "L'article a bien été ajouté.";
            document.getElementById("resultat").appendChild(message);
        });
    });