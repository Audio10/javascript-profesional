/* eslint-disable import/extensions */
import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector('video')

// Construye el MediaPlayer con el objeto que pasa el el como propiedad
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
})

const button = document.querySelector('#reproduce')
button.onclick = () => player.togglePlay()

const muteButton = document.getElementById('muteButton')

muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute()
  } else {
    player.mute()
  }
}
