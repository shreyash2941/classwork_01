async function addPosts(){

    let id = document.getElementById("id");
    let title = document.getElementById("title");
    let author = document.getElementById("author");

    // let send_this_data = {
    //     id: id,
    //     title: title,
    //     author: author,
    // };

    let send_this_data = {
        id,
        title,
        author,
    };

    // make Post request using fetch 

    let res = await fetch(`http://localhost:3000/posts`,{
        method: 'POST',
        body: JSON.stringify(send_this_data),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
    let data = await res.json();
    console.log(data);
}

async function deleteIt(){
    let id = document.getElementById("deleteId").value;

    let res = await fetch(`http://localhost:3000/posts/${id}`,{
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
        },
    });

    let data = await res.json();
    console.log(data)
}