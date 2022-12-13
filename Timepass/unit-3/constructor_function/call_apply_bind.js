


let student1 = {
    name: "Shreyash",
    sirname: "Birajdar",
    class: "web 19",
    rno: 438,
}


let student2 = {
    name: "Saurabh",
    sirname: "Ubale",
    class: "web 19",
    rno: 555,
}


let student3 = {
    name: "Sagar",
    sirname: "Hujare",
    class: "web 19",
    rno: 111,
}

function myName(n,a){
    this.name = n;
    this.age = a;

    console.log(this);
}

myName.call(student1,"sam",27);

myName.apply(student2,["sauri",21]);

let x = myName.bind(student3,"pari",33);
x()