var myvid = document.getElementById('myvideo');
var myvids = [
  "http://www.w3schools.com/html/mov_bbb.mp4",
  "http://www.w3schools.com/html/movie.mp4"
  ];
var activeVideo = 0;

myvid.addEventListener('ended', function(e) {
  // update the new active video index
  activeVideo = (++activeVideo) % myvids.length;

  // update the video source and play
  myvid.src = myvids[activeVideo];
  myvid.play();
});
