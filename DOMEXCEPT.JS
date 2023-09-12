function summit(){
    let a=parseInt(document.getElementById("num1").value)
    let b=parseInt(document.getElementById("num2").value)
    for(i=a;i<b;i++){
        if(i!==30 && i!==40 && i!==60 && i!==70){
            document.getElementById("results").innerHTML+=i +"\n"
        }
    }
}