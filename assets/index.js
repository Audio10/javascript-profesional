import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video');

// Construye el MediaPlayer con el objeto que pasa el el como propiedad
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay] });

const button = document.querySelector('#reproduce');
const muteButton = document.getElementById('#mute')

// Llama el metodo onclick con el togglePlay
button.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();