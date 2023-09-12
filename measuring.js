function convert(){
    var feet=parseInt(document.getElementById("feet").value)
    var inches=parseInt(document.getElementById("inches").value)
    var total=feet*30.48+ inches*2.54;
    document.getElementById("result").innerHTML = total
}