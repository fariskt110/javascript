class student // sudent is class name
{
    constructor(name,age){
        this.name=name // attributes
        this.age=age // attributes
    }
    display()// behaviour
    {
        console.log(this.name,this.age)
    }
}
Obj = new student("jawan",65)
obj.display()