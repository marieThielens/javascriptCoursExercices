// Créer les éléments du tableau .............................
function genererTable()
{
    var container = document.getElementById("container");
    var table = document.createElement("table");
    // les lignes
    for (var i=1; i<8; i++)
    {
        var row = document.createElement("tr");
        
        for (var j=1; j<8; j++)// Pour chaque ligne je crée 6 cases
        {
            var cell = document.createElement("td");
            //var cellText = document.createTextNode("ligne" + i + "colonne :" + j)
                //cell.appendChild(cellText);  
                
                // Insersion des cases dans les lignes  
                row.appendChild(cell);
        }
        // insersion des lignes dans le tableau
        table.appendChild(row);
    }
    container.appendChild(table);

}
genererTable();


// table.addEventListener('click', function(e){
//     console.log([row]);  
//     });

// var jeux = {
//     plateau: [],
    
//     tour: 1, // Le tour du joueur. 1 ou 2
//     verdict: 0, // O:continue, -1: égalité, 1: joueur 1 gagne, 2: joueur2 gagne
//     coups:0, // nombre de coups joué
//     ligne:7, // nombre de lignes
//     colonne:7, // nombre de colonne
//     init: function(parent, lignes, colonnes){
//         if(lignes)this.ligne = lignes;
//         if(colonnes)this.colonne = colonnes;
//     }
// }




