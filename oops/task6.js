class calculator{
    constructor (a,b){
        this.a =a
        this.b= b
    }
    add(){
        console.log(this.a + this.b);
    }
    sub(){
        console.log(this.a-this.b);
    }
    mult(){
        console.log(this.a*this.b);
    }
    div(){
        console.log(this.a/this.b);
    }
}
let a=parseInt(prompt("enter your number"))
let b=parseInt(prompt("enter your number2"))
Obj= new calculator(a,b)
Obj.add()
Obj.sub()
Obj.mult()
Obj.div()