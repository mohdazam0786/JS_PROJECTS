const inputKeywords = document.getElementById("input-keywords");
const submitButton = document.getElementById("submit");
const musicContainer = document.querySelector(".music-container");

submitButton.addEventListener("click", () =>{
    getSongData();
});

async function getSongData(){
    const url='https://shazam.p.rapidapi.com/search';
    const options = {
        method: 'GET',
        headers: {
          "X-RapidAPI-Key": "f522a4479bmsh597573f3a09deb8p12bb87jsn8f1c1925536d",
          "X-RapidAPI-Host": "shazam.p.rapidapi.com"
        },
    };
    const response = await fetch(url,options);
    const results = await response.json();
    setSongDataDisplay(results);
}

function setSongDataDisplay(results){
    musicContainer.innerHTML=`
    <div class="container music-card">
    <div class="col">
        <div>
            <img src=${results.track.hits[0].track.images.coverart} alt="" class="song-img" id="song-img">
            <h4 id="title">${results.track.hits[0].track.title}</h4>
            <a href=${results.track.hits[0].track.url} id="url">${results.track.hits[0].track.url}</a>
        </div>
        <hr>
        <div>
            <img src=${results.track.hits[0].track.images.background} alt="" class="artist-img" id="artist-img">
            <p id="artist-text">${results.track.hits[0].track.subtitle}</p>
        </div>
        </div>
        </div>
    `;
}
