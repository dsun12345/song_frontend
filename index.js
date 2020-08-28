const endPoint = "http://localhost:3000/api/v1/songs"

document.addEventListener('DOMContentLoaded', () => {
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
            render(song)
        })
    })
}

function render (song) {
    const songMarkup = `
    <div data-id=${song.id}>
        <img src = ${song.attributes.album_url}
        height="200" width ="250">
        <h3>Song Title: ${song.attributes.title}</h3>
        <h5>Genre: ${song.attributes.genre}</h5>
        <p>Artist: ${song.attributes.artist.name}</p>
        <button data-id=${song.id}>edit</button>
    </div>
    <br><br>`;

    document.querySelector('#song-container').innerHTML += songMarkup
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
        render(songData)
    })
}