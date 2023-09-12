class square{
    constructor(side1,side2){
        this.side1=side1
        this.side2=side2
    }
    display()
    {
        console.log("area of square is =" + this.side1*this.side2);
    }
}
obj= new square(5,5)
obj.display()