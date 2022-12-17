// API KEY IS   AIzaSyD0EhBYE54ml54mSgPPPBTvCsM7O78-DrA    

// 1 accept searchbar value  
// 2 get movie data for, youtube 
// 3 we need url   
// append data   


let API_KEY = 'AIzaSyD0EhBYE54ml54mSgPPPBTvCsM7O78-DrA';
let container = document.getElementById("container");

let getData = async () => {
    try {
        let query = document.getElementById("query").value;
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${API_KEY}&part=snippet&maxResults=20`);
        let {items} = await res.json();
        let array_of_videos = items;
        // console.log(array_of_videos)
        appendVideos(array_of_videos)

    } catch (error) {
        console.log(error)
        
    }
};

let appendVideos = (data) => {
    container.innerHTML = "";
    data.forEach(({snippet:{title},id:{videoId}}) =>{
        // let title = el.snippet.title;
        // let videoId = el.id.videoId;

        let div = document.createElement("div");
        let iframe = document.createElement("iframe");

        iframe.src = `https://www.youtube.com/embed/${videoId}`
        iframe.width ='100%';
        iframe.height ='100%';
        iframe.allow="fullscreen"

        let name = document.createElement('h5');
        name.innerText = title;

        div.append(iframe,title);
        container.append(div)


        console.log(title,videoId)
    })
}