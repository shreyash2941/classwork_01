// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit",myFunction);
let formTag = document.querySelector("form");

function myFunction(event){
    event.preventDefault();

    let image = formTag.image.value;
    let name = formTag.name.value;
    let batch = formTag.batch.value;
    let dsa = formTag.dsa.value;
    let cs = formTag.cs.value;
    let coding = formTag.coding.value;


    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    let avatar = document.createElement("img");
    avatar.setAttribute("src",image);
    td1.append(avatar);

    let td2 = document.createElement("td");
    td2.innerText = name;

    let td3 = document.createElement("td");
    td3.innerText= batch;

    let td4 = document.createElement("td");
    td4.innerText= dsa;

    let td5 = document.createElement("td");
    td5.innerText= cs;

    let td6 = document.createElement("td");
    td6.innerText= coding;

    let td7 = document.createElement("td");
    let total = Number(dsa)+Number(cs)+Number(coding);
    let percentage = ((total*100)/30);
    td7.innerText= percentage;

    let td8 = document.createElement("td");
    if(percentage>=50){
        td8.innerText = "Passed";
        td8.style.backgroundColor = "green";
    }
    else{
        td8.innerText = "Faild";
        td8.style.backgroundColor = "red";
    }

    let td9 = document.createElement("td");
    td9.innerText = "DELET";
    td9.addEventListener("click",deletIt);

    tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9);
    document.querySelector("tbody").append(tr);
}

function deletIt(event){
    event.target.parentNode.remove();

}
