const video = document.querySelector('.video');
const progressBar = document.querySelector('.progress__filled');
const playerButton = document.querySelector('.player__button');
const volumeInput = document.querySelector('.volume');
const playbackSpeedInput = document.querySelector('.playbackSpeed');
const rewindButton = document.querySelector('.rewind');
const forwardButton = document.querySelector('.forward');

function updateProgressBar() {
  const progress = (100 * video.currentTime) / video.duration;
  progressBar.style.width = progress + '%';
}

function togglePlayPause() {
  if (video.paused) {
    video.play();
    playerButton.textContent = '❚ ❚';
  } else {
    video.pause();
    playerButton.textContent = '►';
  }
}

function updateVolume() {
  video.volume = volumeInput.value;
}

function updatePlaybackSpeed() {
  video.playbackRate = playbackSpeedInput.value;
}

function skipBackward() {
  video.currentTime -= 10;
}

function skipForward() {
  video.currentTime += 25;
}

video.addEventListener('timeupdate', updateProgressBar);
playerButton.addEventListener('click', togglePlayPause);
volumeInput.addEventListener('input', updateVolume);
playbackSpeedInput.addEventListener('input', updatePlaybackSpeed);
rewindButton.addEventListener('click', skipBackward);
forwardButton.addEventListener('click', skipForward);