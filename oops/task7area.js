class area{
    constructor(r)
    {
        this.r=r
    }
    result(){
        let a=3.14*(this.r*this.r)
        console.log(a);
    }
}
obj= new area(5)
obj.result()