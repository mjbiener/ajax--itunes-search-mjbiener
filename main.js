console.log ("hello")

const url='https://itunes.apple.com/search?term='
const form =document.querySelector('#music-search')
const songList= document.querySelector('#song-list')

form.addEventListener('submit', function (event) {
    console.log('running')
    event.preventDefault()
    let searchInput = document.querySelector('#search-box').value
    // const musicInfo = document.querySelector('#search-box').value
    searchRequest()
})



function searchRequest () {
    let searchInput = document.querySelector('.search').value
    fetch(url + searchInput)
    .then(res => res.json())
    .then(data => {
        // for (let music of data) {
            console.log(data)
            // renderMusicItem(music)
        })
    }    
// }
// searchRequest()
// function renderMusicItem () {

// }

// listMusic()