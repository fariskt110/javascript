function squareofoddnumbers(){
a=prompt("enter your number")
for(let i=0;i<=a;i++){
    if(i%2==1){
       let b=i*i;
        console.log(i+"*"+i+"="+b);
    }
}
}squareofoddnumbers()