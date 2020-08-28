class Song {
    constructor(song, songAttributes) {
        this.id = song.id;
        this.title = songAttributes.title;
        this.genre = songAttributes.genre;
        this.album_url = songAttributes.album_url;
        this.artist = songAttributes.artist;
        Song.all.push(this)
    }

    renderSongCard () {
        return `
        <div data-id=${this.id}>
            <img src = ${this.album_url}
            height="200" width ="250">
            <h3>Song Title: ${this.title}</h3>
            <h5>Genre: ${this.genre}</h5>
            <p>Artist: ${this.artist.name}</p>
            <button data-id=${this.id}>edit</button>
        </div>
        <br><br>`;
    }
}

Song.all = [];