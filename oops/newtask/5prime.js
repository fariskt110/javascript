function prime() {
    let a = parseInt(prompt("Enter a number:"))

        if (a == 1 ) {
            document.write("1 is special")
        } else {
            for (let i = 2; i < a; i++) {
                if (a % i == 0) {
                    document.write("The given number is not prime number")
                    break;
                } else {
                    document.write("The given number is prime number")
                    break;
                }
            }
        }
} 
prime()