import MediaPlayer from './MediaPlayer.js';

const video = document.querySelector('video');

// Construye el MediaPlayer con el objeto que pasa el el como propiedad
const player = new MediaPlayer({ el: video });

const button = document.querySelector('button');

// Llama el metodo onclick con el togglePlay
button.onclick = () => player.togglePlay();