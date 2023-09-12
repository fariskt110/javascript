function multiplication(){
    let a = parseInt(prompt("enter a number"))
document.write("Multiplication table of "+a+"<br>")

for (let i = 1; i <= 10; i++) {
    let b = a * i;
    document.write(a + "*" + i + "=" + b + "<br>")
}
}multiplication()