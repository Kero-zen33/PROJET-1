var video = document.getElementById("background-video");
var btn = document.getElementById("btnVideo");

function playAndPause () {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause II";
  } else {
    video.pause();
    btn.innerHTML = "Play ▶";
  }
}
const body = document.body;
const btn = document.querySelectorAll('.button')[0];

btn.addEventListener('mouseenter', () => {
	body.classList.add('hover');
});

btn.addEventListener('mouseleave', () => {
	body.classList.remove('hover');
});