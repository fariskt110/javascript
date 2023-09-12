function checknumber(){
    let a=parseInt(prompt("enter 1st number"))
    let b=parseInt(prompt("enter 2nd number"))
    let a1=a%10
    let b1=b%10
    if(a1==b1){
        document.write("the last digits are same")
    }else{
        document.write("the last digit are not same")
    }
}checknumber