function palindrome(){
    let a=parseInt(prompt("enter your string"))
    temp=a;


// Initializing the result variable 

    let b = 0;
    let z = a;
    let sum = 0;

    while (z > 0) {
        b = z % 10;
        sum = sum * 10 + b
        z = parseInt(z / 10)
    }
    document.write("Reversed Number is :" + sum + "<br>")
} palindrome()