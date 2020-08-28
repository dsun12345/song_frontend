class App {
    attachEventListeners() {
        document.querySelector('#song-container').addEventListener('click', e => {
        const id = parseInt(e.target.dataset.id);
        const song = Song.findById(id);
        console.log(song);
      });
    }
  }