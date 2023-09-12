function calculateBMI(){
    var height=parseInt(document.getElementById("height").value)
    var weight=parseInt(document.getElementById("weight").value)
    var total=[(weight)/(height*height)*10000];
    document.getElementById("result").innerHTML = total
}