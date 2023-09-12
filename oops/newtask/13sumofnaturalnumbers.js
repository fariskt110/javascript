function sumofnaturalnumbers(){
    let a = parseInt(prompt("enter a number"))
    if(a <= 0){
    document.write("not possible")
}else{
    let b = 0;
    for (let i = 1; i <= a; i++) {
        b=b+i;
    }
    document.write("The sum of " + a + " is " + b);
}

}sumofnaturalnumbers()