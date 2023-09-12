function largest(){
    let a=prompt("enter your number")
    let b=prompt("enter your second number")
    let c=prompt("enter your third number")
    if(a>=b && a>=c){
        console.log("largest is :" + a);
    }
    else if(b>=a && b>=c){
        console.log("largest is :" + b);
    }
    else if(c>=a && c>=b){
        console.log("largest is c" + c);
    }
    else{
        console.log("invalid");
    }
}largest()