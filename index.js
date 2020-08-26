const endPoint = "http://localhost:3000/api/v1/songs"

document.addEventListener('DOMContentLoaded', () => {
    getSongs()
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