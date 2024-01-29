
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function openModal2() {
  document.getElementById("myModal2").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
function closeModal2() {
  document.getElementById("myModal2").style.display = "none";
}

var slideIndex = 1;
showGallery(slideIndex);

function plusSlides(n) {
  showGallery(slideIndex += n);
}

function galerrySlide(n) {
  showGallery(slideIndex = n);
}

function showGallery(n) {
  var i;
  var slides = document.getElementsByClassName("gallery");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}


// Test
showGalleryTest(slideIndex);

function plusSlidesTest(n) {
  showGalleryTest(slideIndex += n);
}

function galerrySlideTest(n) {
  showGalleryTest(slideIndex = n);
}

function showGalleryTest(n) {
  var i;
  var slides = document.getElementsByClassName("gallery2");
  var dots = document.getElementsByClassName("demo2");
  var captionText = document.getElementById("caption2");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}