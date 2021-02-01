//how to add  in a single  arrays
const age1 = [ 2,4,4,5,6,9];
const age2 = [ 26,24,45,65];
const age3 = [100,200,300,400];
const full = age1.concat(age2).concat(age3);
console.log(full);

const full2 = [age1,age2,age3];
console.log(full2);

const full3 = [...age1,...age2,...age3];
console.log(full3);

//find  maximum
const billu = 10;
const moni = 20;
const maximum1 = Math.max(billu,moni);//without 3 dots
console.log(maximum1);

//from an array 
const takaPoisa = [10,20];
const maximum2 = Math.max(...takaPoisa);//...dots
console.log(maximum2);