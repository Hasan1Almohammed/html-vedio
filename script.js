const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");

video1.addEventListener("play", () => {
  if (!video2.paused) {
    video2.pause();
  }
});

video2.addEventListener("play", () => {
  if (!video1.paused) {
    video1.pause();
  }
});
