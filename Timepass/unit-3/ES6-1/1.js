let API_KEY = 'AIzaSyD0EhBYE54ml54mSgPPPBTvCsM7O78-DrA';
let container = document.getElementById("container");

async function getData(){
    try {
        let query = document.getElementById("query");

        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${API_KEY}&PART=snippet&maxResults=20`);
        let {items} = await res.json();
        let data_array = items;
        console.log(data_array)
    } catch (error) {
        console.log(error);
    }

}


function showData(){
    data.forEach(function(el){
        
    })
}