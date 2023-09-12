function armstronginterval(){
    let a = parseInt(prompt('Enter a positive low integer value: '));
let b = parseInt(prompt('Enter a positive high integer value: '));

document.write('Armstrong Numbers:'+"<br>");
for (let i = a; i <= b; i++) {//20 65
    let digit = i.toString().length;//2
    let sum = 0;
    let temp = i;//20
    while (temp >0) { //20>0
        let r = temp % 10; //0
        sum +=r ** digit; //0
        temp = parseInt(temp / 10);

    }
    if (sum == i) {
        document.write( i+"<br>")
    }
}
}armstronginterval()