//1
// function doubleIt(num) {
//     return num*2;
// }
//2
// const doubleIt = function (num) {
//     return num*2;
// }
//3 by es6
const doubleIt = num=>num*2; //nam is parameter and num*2 is return value
const result = doubleIt(5);
console.log(result);

const add = (num1, num2) => num1 + num2; //when there are multiple parameter
const total = add(5,6);
console.log(total);

const giveFive = ()=>5; // when there is no parameter
const five = giveFive();
console.log(five);

const largeFunction = (x,y)=>{ // when thera are multitask in the function
    const sum = x+y;
    const sub = x-y;
    const result = sum *sub;
    return result;
}
const large = largeFunction(8,4);
console.log(large)