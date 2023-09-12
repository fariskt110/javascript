var item = document.getElementById("ImageItem");

//  // using query selector(#id name)
 var divEle = document.querySelector("#customText");

 // for hide a element
 function hide(){
    item.setAttribute("hidden","true");
 }
 // to show the hide element
 function reset(){
    item.removeAttribute("hidden","true");
 }
 // // change the content of the div
 function change(){
    divEle.innerHTML = "<p>your item is missing</p>";
 }
 // // mouseover
 function changeImage(){
    item.removeAttribute("src","./images/s1.png");
    item.setAttribute("src","./images/s2.png");
 }

 // // // mouseout
 function resetImage(){
    item.removeAttribute("src","./images/s2.png");
    item.setAttribute("src","./images/s1.png");
 }