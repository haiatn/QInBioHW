class BetweenGenesComparator{
    constructor() {

    }

    compare(firstElement, secondElement) {
        var compartor=new BetweenGenesInSpeciesComparator();
        var genes=firstElement;
        var results=[];
        var speciesNames=[];
        for(var i=0; i<genes.length; i++){
            results[i] = compartor.compare(genes[i],genes[i]).TranscriptSimilarity;
            speciesNames[i]=genes[i].specie;
        }
       return {"results":results,"species":speciesNames};
    }

}
