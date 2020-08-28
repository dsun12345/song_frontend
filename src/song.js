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
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <img src=${this.album_url} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Title: ${this.title}</h5>
              <p class="card-text">Genre: ${this.genre}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">${this.artist.name}</small>
              </div>
            </div>
          </div>
        </div> `        
        
        // <div data-id=${this.id}>
        //     <img src = ${this.album_url}
        //     height="200" width ="250">
        //     <h3>Song Title: ${this.title}</h3>
        //     <h5>Genre: ${this.genre}</h5>
        //     <p>Artist: ${this.artist.name}</p>
        //     <button data-id=${this.id}>edit</button>
        // </div>
        // <br><br>`;
    }
}

Song.all = [];