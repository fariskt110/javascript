class traingle{
constructor(length,breadth){
    this.length=length
    this.breadth=breadth
}
result()
{
    console.log(this.length*this.breadth);
}
}
obj = new traingle(10,5)
obj.result()