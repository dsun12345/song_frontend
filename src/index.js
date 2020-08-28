const endPoint = "http://localhost:3000/api/v1/songs"

document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.attachEventListeners();
    getSongs()

    const createSongForm = document.querySelector("#create-song-form")

    createSongForm.addEventListener("submit", (e) => 
    createFormHandler(e))
})

function getSongs() {
    fetch(endPoint)
    .then(response => response.json())
    .then(songs => {
        songs.data.forEach(song => {
            const newSong = new Song(song, song.attributes)
            document.querySelector("#song-container").innerHTML += newSong.renderSongCard()   
        })
    })
}

function createFormHandler (e) {
    e.preventDefault()
    const titleInput = document.querySelector('#input-title').value
    const genreInput = document.querySelector('#input-genre').value
    const albumInput = document.querySelector('#input-url').value
    const artistId = parseInt(document.querySelector('#artists').value)
    postFetch(titleInput, genreInput, albumInput, artistId)
}

function postFetch(title, genre, album_url, artist_id) {
    const bodyData = {title, genre, album_url, artist_id}
    fetch(endPoint, {
        method: "POST",     
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(song => {
        console.log(song);
        const songData = song.data
        let newSong = new Song(songData, songData.attributes)
        document.querySelector('#song-container').innerHTML += newSong.renderSongCard()
    })
}