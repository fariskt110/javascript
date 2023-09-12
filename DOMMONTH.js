function month() {
    let a = parseInt(document.getElementById("num").value)
    for (let i = 1; i <= a; i++) {
        if (i == 1) {
            document.getElementById("result").innerHTML += "jan" + "<br>";
        }
        else if (i == 2) {
            document.getElementById("result").innerHTML += "feb" + "<br>";

        }
        else if (i == 3) {
            document.getElementById("result").innerHTML += "march" + "<br>";
        }
        else if (i == 4) {
            document.getElementById("result").innerHTML += "april" + "<br>";
        }
        else if (i == 5) {
            document.getElementById("result").innerHTML += "may" + "<br>";
            break;
        }
        else {

        }
    }
    document.getElementById("result").innerHTML += "national cookies day is december 4th" + "<br>";
}
