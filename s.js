let video = document.querySelector("video");
let i = 0;
let y = 0;
window.addEventListener("keyup", (o) => {
  let l=o.key
  if (l=== "k") {
    i++;
    if (i % 2 !== 0) {
      video.pause();
    } else {
      video.play();
    }
  }
  if (l === "j") {
    video.currentTime -= 10;
  }
  if (l === "l") {
    video.currentTime += 10;
  }
  if (l=== "m") {
    y++;
    if (y % 2 === 0) {
      video.muted = false;
    } else {
      video.muted = true;
    }
  }
  if (l === "ArrowLeft") {
    video.currentTime -= 5;
  }
  if (l === "ArrowRight") {
    video.currentTime += 5;
  }
});
