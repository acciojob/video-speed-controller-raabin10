const video = document.querySelector('.player__video');
const toggleBtn = document.querySelector('.toggle');
const volumeRange = document.querySelector('.volume');
const speedRange = document.querySelector('.playbackSpeed');
const rewindBtn = document.querySelector('.rewind');
const forwardBtn = document.querySelector('.forward');
const progressFilled = document.querySelector('.progress__filled');
const progressBar = document.querySelector('.progress');

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  toggleBtn.textContent = video.paused ? '► Play' : '❚ ❚ Pause';
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggleBtn.addEventListener('click', togglePlay);
volumeRange.addEventListener('input', handleRangeUpdate);
speedRange.addEventListener('input', handleRangeUpdate);
rewindBtn.addEventListener('click', skip);
forwardBtn.addEventListener('click', skip);

let mousedown = false;
progressBar.addEventListener('click', scrub);
progressBar.addEventListener('mousemove', (e) => mousedown && scrub(e));
progressBar.addEventListener('mousedown', () => (mousedown = true));
progressBar.addEventListener('mouseup', () => (mousedown = false));
