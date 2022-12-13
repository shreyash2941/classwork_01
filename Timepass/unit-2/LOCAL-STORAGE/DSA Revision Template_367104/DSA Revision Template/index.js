document.querySelector("form").addEventListener("submit",myFunction);
let formTag = document.querySelector("form");
let queArr = JSON.parse(localStorage.getItem("queData")) || [];
displayTable();

function myFunction(event){
    event.preventDefault();

    let queObj = {
        queTitle: formTag.title.value,
        queLink: formTag.link.value,
        queDifficulty: formTag.difficulty.value,
    }
    queArr.push(queObj);
    displayTable();
    localStorage.setItem("queData",JSON.stringify(queArr))
}

function displayTable(){
    document.querySelector("tbody").innerHTML="";
    queArr.forEach(function (elem){
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerText = elem.queTitle;

        let td2 = document.createElement("td");
        td2.innerText = elem.queLink;

        let td3 = document.createElement("td");
        td3.innerText = elem.queDifficulty;

        let td4 = document.createElement("td");
        if(elem.queDifficulty=="Medium" || elem.queDifficulty=="Hard"){
            td4.innerText = "Yes";
        }
        else{
            td4.innerText = "No";
        }

        tr.append(td1,td2,td3,td4);
        document.querySelector("tbody").append(tr);
    })
}
