// let student1 = {
//     firstName: "shreyash",
//     birajdarName: "birajdar",
//     age: 27,
//     class: "unit 5"
// }


function Student(fname,lname,age,cls){
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
    this.class = cls;
}

let std1 = new Student("shreyash","birajdar",27,"unit 2");
let std2 = new Student("shraddha","birajdar",30,"unit 2");
let std3 = new Student("sagar","hujare",33,"unit 2");
let std4 = new Student("tanaji","birajdar",57,"unit 2");

Student.prototype.school = "mps";


console.log(std1.school);
console.log(std2.school);
console.log(std3.school);
console.log(std4.school);