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
            if (song.trackName !== undefined) {
            
            renderMusicResults(song)
            } 
            else {
                noResults(song)
                // noResults(song)
            }
        }
    })   
}

function noResults (song) {
    let indSong = document.createElement('li')
        let noResult = document.createElement('p')
        noResult.innerText="No results found"
        indSong.appendChild(noResult)
        songList.appendChild(indSong)
}



function renderMusicResults (song) {
    // let songData = document.createElement ('div')
    let indSong = document.createElement('li')
    
    let songAudio = document.createElement('audio')
    songAudio.className = 'music-player'
    songAudio.src = song.previewUrl
    songAudio.volume = .4
    // songAudio.controls = true;
    indSong.appendChild(songAudio)
    
    let artwork = document.createElement('img')
    artwork.src=song.artworkUrl100
    indSong.appendChild(artwork)
    
    let artistName= document.createElement('h3')
    artistName.innerText=song.artistName
    indSong.appendChild(artistName)
    
    let title = document.createElement('h5')
    title.innerText = song.trackName
    indSong.appendChild(title)

    let releaseDate = document.createElement('p')
    releaseDate.innerText =`Release Date: ${moment(song.releaseDate). format('l')}`;
    indSong.appendChild(releaseDate)
    
    let trackId= document.createElement('p')
    trackId.innerText=song.trackId
    // indSong.appendChild(trackId)

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