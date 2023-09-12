

function btnclick(value){

    document.getElementById('screen').value += value;
}


function clearscreen(){
    document.getElementById('screen').value="";
}
function findresult(){
    var value=document.getElementById('screen').value
    var result= eval(value)
    document.getElementById('screen').value=result;
}
function back() {
    var value = document.getElementById('screen').value;
    document.getElementById('screen').value = value.substr(0, value.length - 1);
}