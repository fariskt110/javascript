function armstrong() {
    let a = parseInt(prompt("enter your number"))
    let temp = 0
    let sum = 0;
    let x = a;
    while (x > 0) {
        temp = x % 10
        sum = sum + (temp * temp * temp)
        x = parseInt(x / 10)
    }
    document.write(sum + "<br>")

    if (a == sum) {
        document.write("Your number is armstrong")
    }
    else {
        document.write("your number is not an armstong number")
    }
}
armstrong()