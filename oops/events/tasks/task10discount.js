function discount(){
    a=int(input("enter your bill amount"))
if(a>=1000){
  let b=(a/100)*10
  console.log("your bill amount is"+ a);
  console.log("your discounted amount is"+ b);
  console.log("your net amount is" +a-b);
}
else{
  console.log("no discount");
}
}
discount()