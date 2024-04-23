document.addEventListener("DOMContentLoaded", function () {

  let aboutBtn = document.querySelector(
    ".about-section .about-content .circle .video-action .play-btn"
  );
  let aboutClip = document.querySelector(
    ".about-section .about-content .circle .video-action .about-clip"
  );
  let aboutClose = document.querySelector(
    ".about-section .about-content .circle .video-action .about-clip .close-btn"
  );
  let aboutVideo = document.querySelector(
    ".about-section .about-content .circle .video-action .about-clip video"
  );

  aboutBtn.onclick = function () {
    aboutBtn.classList.add("active");
    aboutClip.classList.add("active");
    aboutVideo.play();
    aboutVideo.currentTime = 0;
  };

  aboutClose.onclick = function () {
    aboutBtn.classList.remove("active");
    aboutClip.classList.remove("active");
    aboutVideo.pause();
  };
});
