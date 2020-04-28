 async function similarityBetweenTranscripts(){
    var transcript1=$('#search1Transcript1').val();
    var transcript2=$('#search1Transcript2').val();
    url="https://dochap.bgu.ac.il/dochap/querySearch/";
    comparison=new Comparison(await transcriptFromDatebase(transcript1),await transcriptFromDatebase(transcript2),new BetweenTranscriptsComparator(),new Drawer())
    comparison.search();
}

async function transcriptFromDatebase(transcript_id){
    gene=gene1=await $.get(
    url+transcript_id+"/all/false",
    {},
    function(data) {
       return data;
    }
    );
    gene=gene.genes[0];
    transcript=undefined;
    for(var i=0; i<gene.transcripts.length;i++){
        if(gene.transcripts[i].transcript_id==transcript_id){
            transcript=gene.transcripts[i];
            return transcript;
        }
    }

}
