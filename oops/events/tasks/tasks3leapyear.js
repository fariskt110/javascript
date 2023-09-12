function leapyear(){
    let a = parseInt(prompt("enter a year"))
    if (a.length < 4 || a == 0) {
        document.write("not valid")
    } else {
        if (a % 4 == 0) {
            document.write("The year is leap year")
        } else {
            document.write("The year is not a leap year")
    
        }
    }
}leapyear()
