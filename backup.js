// function add(num1,num2) {
//     return num1 + num2;
// }



// total = add(5,6);
// console.log(total);
function add(num1,num2 = 0) { //another one
    //num2 = num2 || 0; // it is a way to set back up
    return num1 + num2;
}



total = add(5);//jdi ekta dte vule jai 
console.log(total);