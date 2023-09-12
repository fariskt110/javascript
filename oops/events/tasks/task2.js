function temp(){
    let celcius = parseInt(prompt("enter celcius temperature"))
    if (celcius < 0) {
        document.write("not possible")
    } else {
        let f = (celcius * (9 / 5) + 32);
        document.write("Celcius temp:" + celcius + "<br> Faranheit temp:" + f)
    }
}temp()