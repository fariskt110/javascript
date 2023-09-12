function factorial(){
    let a = parseInt(prompt("enter a number"))
    if(a <= 0){
    document.write("Factorial is not possible")
}else{
    let b = 1;
    for (let i = 1; i <= a; i++) {
        b=b*i;
    }
    document.write("The factorial of " + a + " is " + b);
}

}factorial()