// Check type of an object
class type{
    constructor(name,id){
        this.name=name
        this.id=id
    }
    diplay(){
        console.log(typeof this.name)
        console.log(typeof this.id)

        

    }
}
obj= new type("faris",7)
obj.diplay()