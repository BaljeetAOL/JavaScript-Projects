alert("JS is working!");
const images = [
  "plant1.png",
  "plant2.png",
  "plant3.png",
  "plant4.png"
];
console.log("JS loaded");
let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;

  document.getElementById("lightbox").style.display = "block";
  document.getElementById("lightbox-img").src = images[currentIndex];
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeSlide(step) {
  currentIndex += step;

  if (currentIndex >= images.length) currentIndex = 0;
  if (currentIndex < 0) currentIndex = images.length - 1;

  document.getElementById("lightbox-img").src = images[currentIndex];
}