function words(){
    var text=document.getElementById("word").value
    var chara= text.length;
    var resulta=1;
    for(var i=0;i<=chara;i++){
        if(text[i]==" "){
            resulta += 1
        }
    }
    document.getElementById("result").innerHTML=chara;
    document.getElementById("results").innerHTML=resulta;
}
