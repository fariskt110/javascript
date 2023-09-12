// add an element to an array

// var animal=["lion","tiger","cat","dog"];
// // animal[5] = "elephant";
// // document.write(animal);

// //by using push method
// animal.push("fox","elephant","cheetah");
// document.write(animal);
// document.write("<br>");

// delete an array element

// // using shift method----- it will delete the first element from the array
// var animal =["lion","tiger","cat","dog"];
// animal.shift();
// document.write(animal);
// document.write("<br");


// // // using pop method ----- it will delete the first element from the array
// var animal = ["lion","tiger","cat","dog"];
// animal.shift();
// document.write(animal);
// document.write("<br>");


// using splice method---- it will delete the element as our wish from the array
var animal=["lion","tiger","cat","dog","tiger","cow"];
animal.space(0,3); // 2 is the index number of cat and 2 is the count of element that want to be deleted
document.write(animal);
document.write("<br>");