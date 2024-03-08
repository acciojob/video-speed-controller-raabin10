const video = document.querySelector('.player__video');
const toggle = document.querySelector('.toggle');
const rewindButton = document.querySelector('.rewind');
const forwardButton = document.querySelector('.forward');
const volumeRange = document.querySelector('input[name="volume"]');
const playbackRateRange = document.querySelector('input[name="playbackRate"]');
const progressBar = document.querySelector('.progress__filled');

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  toggle.textContent = video.paused ? '►' : '❚ ❚';
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
rewindButton.addEventListener('click', skip);
forwardButton.addEventListener('click', skip);
volumeRange.addEventListener('input', handleRangeUpdate);
playbackRateRange.addEventListener('input', handleRangeUpdate);

let mousedown = false;
progressBar.addEventListener('click', scrub);
progressBar.addEventListener('mousemove', (e) => mousedown && scrub(e));
progressBar.addEventListener('mousedown', () => mousedown = true);
progressBar.addEventListener('mouseup', () => mousedown = false);
