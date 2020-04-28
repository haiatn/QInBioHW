class Comparison{
    constructor(firstElement,secondElement,comparator,drawer){
        this.firstElement=firstElement;
        this.secondElement=secondElement;
        this.compartor=comparator;
        this.drawer=drawer;
    }
    search(){
        this.drawer.draw(this.compartor.compare(this.firstElement,this.secondElement));
    }
}
