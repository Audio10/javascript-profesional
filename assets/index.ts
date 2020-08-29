/* eslint-disable import/extensions */
import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'

const video = document.querySelector('video')

// Construye el MediaPlayer con el objeto que pasa el el como propiedad
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
})

const button: HTMLElement = document.querySelector('#reproduce')
button.onclick = () => player.togglePlay()

const muteButton: HTMLElement = document.getElementById('muteButton')

muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute()
  } else {
    player.mute()
  }
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch((error) => {
    console.log(error.message)
  })
}
