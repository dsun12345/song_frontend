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
        })
    })
}

function createFormHandler (e) {
    e.preventDefault()
    const titleInput = document.querySelector('#input-title').value
    const genreInput = document.querySelector('#input-genre').value
    const imageInput = document.querySelector('#input-url').value
    const artistId = parseInt(document.querySelector('#artists').value)
    postFetch(titleInput, genreInput, imageInput, artistId)
}

function postFetch(title, genre, image_url, artist_id) {
    console.log(title, genre, image_url, artist_id);
}