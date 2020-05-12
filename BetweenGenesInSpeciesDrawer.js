class BetweenGenesInSpeciesDrawer{
    constructor(){

    }
    draw(results){
        var total=results.TranscriptSimilarity;
        results=results.resultMatrix;
        window.alert("finished");
        var html="<table>";
        html=html+"<tr>";
        html=html+"<td>Transcripts</td>";

        for(var i=0; i<results[0].length;i++){
            html=html+"<td>T"+(i+1)+"</td>"
        }
        html=html+"</tr>";

        for(var i=0; i<results.length;i++){
            html=html+"<tr>";
            html=html+"<td>T"+(i+1)+"</td>";
            for(var j=0; j<results[i].length;j++){
                html=html+"<td>";
                if(i>=j){
                    html=html+results[i][j];
                }
                html=html+"</td>";
            }
            html=html+"</tr>"
        }
        html=html+"</table><br><br>Result:"+total;

        $('#graphVisualization').html(html);
    }
}
