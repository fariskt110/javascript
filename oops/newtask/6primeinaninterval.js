function primeinterval(){
    let a = parseInt(prompt("Enter a start:"))
    let b = parseInt(prompt("Enter a end:"))
    let num = 0

    if (a == 1 || b == 1) {
        document.write("1 is special")
    } else {
        for (let i = a; i <= b; i++) {
            let flag = 0;

            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    flag = 1;
                }
            }
            if (i > 1 && flag == 0) {
                document.write(i + "&nbsp")
            }
        }
    }
}