const endPoint = "http://localhost:3000/api/v1/songs"

    document.addEventListener('DOMContentLoaded', () => {
    getSongs()
    let createSongForm = document.querySelector("#create-song-form")
    createSongForm.addEventListener("submit", (e) => 
    createFormHandler(e))
    
    const songContainer = document.querySelector('#song-container')
    songContainer.addEventListener('click', e => {
        const id = parseInt(e.target.dataset.id);
        const song = Song.findById(id);
        document.querySelector("#update-song").innerHTML = song.renderUpdateForm();
    })

    document.querySelector('#update-song').addEventListener('submit', e => updateFormHandler(e))
    
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
    let createSongForm = document.querySelector("#create-song-form")
    const titleInput = document.querySelector('#input-title').value
    const genreInput = document.querySelector('#input-genre').value
    const albumInput = document.querySelector('#input-url').value
    const artistId = parseInt(document.querySelector('#artists').value)
    postFetch(titleInput, genreInput, albumInput, artistId)
    createSongForm.reset()
}

function updateFormHandler (e) {
    e.preventDefault();
    let id = parseInt(e.target.dataset.id);
    let card = document.querySelector(`[data-id="${id}" ]`)
    let song = Song.findById(id);
    let title = e.target.querySelector('#input-title').value;
    let genre = e.target.querySelector('#input-genre').value;
    let album_url = e.target.querySelector('#input-url').value;
    patchSong(song, title, genre, album_url)
    card.querySelector(".card-title").textContent = "Title: " + title
    card.querySelector(".card-text").textContent = "Genre: " + genre 
    card.querySelector(".card-img-top").src = album_url
    
    // document.getElementById("update-song").style.display = 'none';
}

function patchSong (song, title, genre, album_url, artist_id) {
    const bodyJSON = {id: song.id, title, genre, album_url, artist_id}
    fetch(`http://localhost:3000/api/v1/songs/${song.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(bodyJSON),
    })
}


function postFetch(title, genre, album_url) {
    const bodyData = {title, genre, album_url}
    fetch(endPoint, {
        method: "POST",     
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(song => {
        const songData = song.data
        let newSong = new Song(songData, songData.attributes)
        document.querySelector('#song-container').innerHTML += newSong.renderSongCard()
    })

}

function myFunction() {
    let x = document.getElementById("update-song");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}