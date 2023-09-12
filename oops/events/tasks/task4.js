function pyramid(){
    let a = prompt("enter your limit  of pyramid") //10
    for (let i = 1; i <= a; i++) {
        for (let j = i; j <= a; j++) {
            document.write("* ")
        }
        document.write("<br>")
    }
}pyramid()