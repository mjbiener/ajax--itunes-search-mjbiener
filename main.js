console.log ("hello")

const url='https://itunes.apple.com/search?term='
const proxyUrl= 'https://proxy-itunes-api.glitch.me/search?term='
const form =document.querySelector('#music-search-form')
const songList= document.querySelector('#song-list')

form.addEventListener('submit', function (event) {
    // console.log('running')
    event.preventDefault();
    clearResults();
    searchRequest();
})


function clearResults () {
    let songs = document.querySelectorAll("li")
        for (let song of songs) {
            song.remove();
        }
}


function searchRequest () {
    let searchInput = document.querySelector('#search-box').value
    fetch(url + searchInput)
    .then(res => res.json())
    .then(data => {
        for (let song of data.results) {
            console.log(song) //.trackName  .artistName //
            renderMusicResults(song)
        }
    })   
}

function renderMusicResults (song) {
    // let songData = document.createElement ('div')
    let indSong = document.createElement('li')
    
    let songAudio = document.createElement('audio')
    songAudio.className = 'music-player'
    songAudio .src = song.previewUrl
    // songAudio.controls = true;
    indSong.appendChild(songAudio)
    
    let artwork = document.createElement('img')
    artwork.src=song.artworkUrl100
    indSong.appendChild(artwork)
    
    let title = document.createElement('p')
    title.innerText = song.trackName
    indSong.appendChild(title)
    
    let artistName= document.createElement('H4')
    artistName.innerText=song.artistName
    indSong.appendChild(artistName)
    // songList.appendChild(indSong)

    let trackId= document.createElement('p')
    trackId.innerText=song.trackId
    // indSong.appendChild(trackId)

    // let songAudio = document.createElement('audio')
    // songAudio.className = 'music-player'
    // songAudio .src = song.previewUrl
    // // songAudio.controls = true;
    // indSong.appendChild(songAudio)

    songList.appendChild(indSong)

songList.addEventListener('click', e => {
    playMusic(e.target.parentElement)
})
}

function playMusic(song) {
    let audio = document.querySelector("audio")
    console.log(song.firstElementChild)
    audio.src = song.firstElementChild.src
}