function simplecalculator(){
    let a = parseInt(prompt("enter a number"))
let b = parseInt(prompt("enter 2nd number"))
let c = prompt("enter operation '+ - * / '")
if (c == '+') {
    let plus = a + b;
    document.write("result is:" + plus)
} else if (c == '-') {
    let min = a - b;
    document.write("result is:" + min)
} else if (c == '*') {
    let mul = a * b;
    document.write("result is:" + mul)
} else if (c == '/') {
    let div = a / b;
    document.write("result is:" + div)
} else {
    document.write("invalid")
}
}simplecalculator()