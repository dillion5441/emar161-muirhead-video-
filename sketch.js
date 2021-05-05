let vid;
function setup() {
  noCanvas();

  vid = createVideo(
    ['House for coding.mp4'],
    vidLoad
  );

  vid.size(800, 450);
}

function vidLoad() {
  vid.loop();
  vid.volume(0);
}