function factors(){
    let a = parseInt(prompt("entet a number"))
    for (let i = 1; i <a; i++) {
        if (a % i == 0) {
            document.write(i + "&nbsp")
        }
    }
}factors()