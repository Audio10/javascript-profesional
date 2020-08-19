// Define la funcion como un Objeto y recibe un objeto como config {}
function MediaPlayer(config) {
  this.media = config.el
  this.plugins = config.plugins || []
  this.initPlugins()
}

MediaPlayer.prototype.initPlugins = function initPlugins() {
  const player = {
    play: () => this.play(),
    pause: () => this.pause(),
    media: this.media,
    get muted() {
      return this.media.muted
    },
    set muted(value) {
      if (value === true) {
        this.media.muted = true
      } else {
        this.media.muted = false
      }
    },
  }

  this.plugins.forEach((plugin) => {
    plugin.run(this)
  })
}

// Cuando tomamos una function como clase, los metodos deben ser agregados al prototype
MediaPlayer.prototype.play = function play() {
  this.media.play()
}

MediaPlayer.prototype.pause = function pause() {
  this.media.pause()
}

MediaPlayer.prototype.togglePlay = function togglePlay() {
  if (this.media.paused) {
    this.play()
  } else {
    this.pause()
  }
}

MediaPlayer.prototype.toggleMute = function toggleMute() {
  if (this.media.muted) {
    this.unmute()
  } else {
    this.mute()
  }
}

MediaPlayer.prototype.mute = function mute() {
  this.media.muted = true
}

MediaPlayer.prototype.unmute = function unmute() {
  this.media.muted = false
}

export default MediaPlayer
