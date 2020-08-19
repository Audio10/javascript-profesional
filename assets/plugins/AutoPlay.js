function AutoPlay() {}
AutoPlay.prototype.run = function run(player) {
  if (!player.muted) {
    // eslint-disable-next-line no-param-reassign
    player.muted = true
  }
  player.play()
}

export default AutoPlay
