//arrays
//1. earlier definition
var animal ="elephant";
var animal="cat";

//using array
var animal=["lion","cat","dog"];
 document.write(animal+ "<br>");
// // // to acess one element from an array we use index numbers started with 0.
 document.write(animal[0] + "<br>");
 document.write(animal[2] + "<br>");


// replace a value from array
var animal = ["lion","cat","dog"];
document.write(animal[2] + "<br>");

 animal[0] = "elephant";
animal[4] = "cheetah";
document.write(animal + "<br>");

// length of an array
var x = animal.length;
document.write(x + "<br>");

// // // print all items using for loop
for (var i=0;i<x;i++)
 document.write(animal[i] + "<br>");

