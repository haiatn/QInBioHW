class Drawer{
    constructor(){

    }
    draw(results){
        window.alert(results);
        //write summary text
        //create graphs
        var html="<table>";
        for(var i=0; i<results.length;i++){
            html=html+"<tr>"
            for(var j=0; j<results[i].length;j++){
                html=html+"<td>";
                html=html+results[i][j];
                html=html+"</td>";
            }
            html=html+"</tr>"
        }

        html=html+"</table>";
        $('#graphVisualization').html(html);
    }
}
