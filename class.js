// class student{
//     constructor(){
//         this.price = 300;
//         this.color = "red";
//     }
// }
// const student1 = new student();
// const student2 = new student();
// console.log(student1,student2);
class Student{
    constructor(productPrice,productColor){
        this.price = productPrice;
        this.color = productColor;
        this.brand = "samsung"
    }
}
const student1 = new Student(300,"red");
const student2 = new Student(400,"blue");
console.log(student1,student2);