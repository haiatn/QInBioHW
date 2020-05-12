class BetweenGenesDrawer{
    constructor(){

    }
    draw(results){
        window.alert("finished");

        var speciesNames=results.species;
        var results=results.results;

        var html="<table>";
        var titles="<tr>"
        var values="<tr>"
        for(var i=0; i<results.length;i++){
            if(isNaN(results[i])){
                titles=titles+"<td>"+speciesNames[i]+"</td>";
            values=values+"<td>only one transcript</td>";
            }else{
                titles=titles+"<td>"+speciesNames[i]+"</td>";
            values=values+"<td>"+results[i]+"</td>";
            }
        }
        titles=titles+"</tr>";
        values=values+"</tr>";
        html=html+titles+values+"</table>";

        $('#graphVisualization').html(html);
    }
}
