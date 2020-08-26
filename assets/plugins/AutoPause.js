class AutoPause {
  constructor() {
    this.threshold = 0.25
    // Le dice que this es la instancia del objeto para handleIntersection es decir va a ser el plugin
    this.handleIntersection = this.handleIntersection.bind(this)
  }

  run(player) {
    this.player = player

    // Un metodo que emite cuando es observado y un objeto de configuracion
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    })

    // llama al metodo que observa y le envias que va a observar
    observer.observe(this.player.media)
  }

  // El metodo al ser ligado al observer, al llamar observe este envia una lista de entradas al metodo.
  handleIntersection(entries) {
    const entry = entries[0]

    // determina si el evento esta llendo o no
    // ********************************* THIS! en este caso seria el objeto observer porque es quien esta llamando a la funcion!!   *********************************************
    const isVisible = entry.intersectionRatio >= this.threshold

    if (isVisible) {
      this.player.play()
    } else {
      this.player.pause()
    }
  }
}

export default AutoPause
