 async function similarityBetweenTranscripts(){
    var transcript1=$('#search1Transcript1').val();
    var transcript2=$('#search1Transcript2').val();
    comparison=new Comparison(await transcriptFromDatebase(transcript1),await transcriptFromDatebase(transcript2),new BetweenTranscriptsComparator(),new Drawer())
    comparison.search();
}

async function similarityBetweenGenesInSpecies(){
    var species=$('#search2Species').val();
    var gene=$('#search2Gene').val();
    gene= await geneFromDatebase(gene,species);
    comparison=new Comparison(gene,gene,new BetweenGenesInSpeciesComparator(),new BetweenGenesInSpeciesDrawer())
    comparison.search();
}

async function similarityBetweenGenes(){
    var gene=$('#search3Gene').val();
    gene= await allGenesFromDatebase(gene);
    comparison=new Comparison(gene,gene,new BetweenGenesComparator(),new BetweenGenesDrawer())
    comparison.search();
}

async function transcriptFromDatebase(transcript_id){
    url="https://dochap.bgu.ac.il/dochap/querySearch/";
    gene=await $.get(
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

        }
    }
    transcript.name=transcript_id;
    return transcript;
}
async function geneFromDatebase(gene,species){
    url="https://dochap.bgu.ac.il/dochap/querySearch/";
    gene=await $.get(
    url+gene+"/"+species+"/false",
    {},
    function(data) {
       return data;
    }
    );
    return gene.genes[0];
    }

async function allGenesFromDatebase(gene){
    url="https://dochap.bgu.ac.il/dochap/querySearch/";
    gene=await $.get(
    url+gene+"/all/false",
    {},
    function(data) {
       return data;
    }
    );
    return gene.genes;
}
