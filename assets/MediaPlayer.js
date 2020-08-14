// Define la funcion como un Objeto y recibe un objeto como config {}
function MediaPlayer(config) {
    this.media = config.el;
  }

  // Cuando tomamos una function como clase, los metodos deben ser agregados al prototype
  MediaPlayer.prototype.play = function() {
    this.media.play();
  };

  MediaPlayer.prototype.pause = function() {
    this.media.pause();
  };

  MediaPlayer.prototype.togglePlay = function() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  };

  export default MediaPlayer;