class App {
    attachEventListeners() {
        document.querySelector('#song-container').addEventListener('click', e => {
        const id = parseInt(e.target.dataset.id);
        const song = Song.findById(id);
        document.querySelector('#update').innerHTML = note.renderUpdateForm();
      });
    }
  }