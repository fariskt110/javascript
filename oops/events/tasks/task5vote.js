function voteandcontest(){
    a=prompt("enter your age")
    if(a>=18 && a<=25){
        console.log("he can vote");
    }
    else if(a>=25){
console.log("he can vote and contest in election");
    }
    else{
        console.log("your are a baby");
    }
}