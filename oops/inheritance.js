// inheritance example
class person{
    constructor(name){
        this.name = name;
    }
    //method to return the string
    tostring(){
        return ("Name of person:${this.name}");
    }
}
class student extends persons{
    constructor(name,id){
        //super keyword for calling the above class constructor
        super(name);
        this.id = id;
    }
    tostring(){
        return ('${super.tostring()},student ID: $(this.id}');
    }
}
let student1= new student("mukul",22);
console.log(student1.toString());