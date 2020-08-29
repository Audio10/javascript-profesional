// Define la funcion como un Objeto y recibe un objeto como config {}
class MediaPlayer {
  media: HTMLMediaElement
  plugins: Array<any>

  constructor(config) {
    this.media = config.el
    this.plugins = config.plugins || []
    this.initPlugins()
  }

  private initPlugins() {
    this.plugins.forEach((plugin) => {
      plugin.run(this)
    })
  }

  // Cuando tomamos una function como clase, los metodos deben ser agregados al prototype
  play() {
    this.media.play()
  }

  pause() {
    this.media.pause()
  }

  togglePlay() {
    if (this.media.paused) {
      this.play()
    } else {
      this.pause()
    }
  }

  mute() {
    this.media.muted = true
  }

  unmute() {
    this.media.muted = false
  }
}

export default MediaPlayer
