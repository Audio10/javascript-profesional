function AutoPlay() {}
AutoPlay.prototype.run = function run(player) {
  player.mute()
  player.play()
}

export default AutoPlay
