//Open Modal functions
function openModalMTL() {
  document.getElementById("mtlModal").style.display = "block";
}

function jrOpenModal() {
  document.getElementById("jrModal").style.display = "block";
}

function neweraOpenModal() {
  document.getElementById("neweraModal").style.display = "block";
}

function elecdataOpenModal() {
  document.getElementById("elecdataModal").style.display = "block";
}

function htsOpenModal() {
  document.getElementById("htsModal").style.display = "block";
}

function rwOpenModal() {
  document.getElementById("rwModal").style.display = "block";
}
//End Open Modal functions

//Close Modal functions
function mtlCloseModal() {
  document.getElementById("mtlModal").style.display = "none";
}
function jrCloseModal() {
  document.getElementById("jrModal").style.display = "none";
}
function neweraCloseModal() {
  document.getElementById("neweraModal").style.display = "none";
}

function elecdataCloseModal() {
  document.getElementById("elecdataModal").style.display = "none";
}

function htsCloseModal() {
  document.getElementById("htsModal").style.display = "none";
}

function rwCloseModal() {
  document.getElementById("rwModal").style.display = "none";
}
//End Close Modal functions


// MTL functionality
var slideIndex = 1;
mtlGalerrySlide(slideIndex);

function mtlPlusSlides(n) {
  mtlGalerrySlide(slideIndex += n);
}

function mtlGalerrySlide(n) {
  mtlGalerrySlide(slideIndex = n);
}

function mtlGalerrySlide(n) {
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
// End MTL functionality


// jr functionality
var slideIndex = 1;
jrGalerrySlide(slideIndex);

function jrPlusSlides(n) {
  jrGalerrySlide(slideIndex += n);
}

function jrGalerrySlide(n) {
  jrGalerrySlide(slideIndex = n);
}

function jrGalerrySlide(n) {
  var i;
  var slides = document.getElementsByClassName("jrElectrical");
  var dots = document.getElementsByClassName("jrDemo");
  var captionText = document.getElementById("jrCaption");
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
// End jr functionality

// new era functionality
var slideIndex = 1;
neweraGalerrySlide(slideIndex);

function neweraPlusSlides(n) {
  neweraGalerrySlide(slideIndex += n);
}

function neweraGalerrySlide(n) {
  neweraGalerrySlide(slideIndex = n);
}

function neweraGalerrySlide(n) {
  var i;
  var slides = document.getElementsByClassName("newera");
  var dots = document.getElementsByClassName("neweraDemo");
  var captionText = document.getElementById("neweraCaption");
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
// new era functionality

// Electada functionality
var slideIndex = 1;
elecdataGalerrySlide(slideIndex);

function elecdataPlusSlides(n) {
  elecdataGalerrySlide(slideIndex += n);
}

function elecdataGalerrySlide(n) {
  elecdataGalerrySlide(slideIndex = n);
}

function elecdataGalerrySlide(n) {
  var i;
  var slides = document.getElementsByClassName("elecdata");
  var dots = document.getElementsByClassName("elecdataDemo");
  var captionText = document.getElementById("elecdataCaption");
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
// new Electada functionality

// HTS functionality
var slideIndex = 1;
htsGalerrySlide(slideIndex);

function htsPlusSlides(n) {
  htsGalerrySlide(slideIndex += n);
}

function htsGalerrySlide(n) {
  htsGalerrySlide(slideIndex = n);
}

function htsGalerrySlide(n) {
  var i;
  var slides = document.getElementsByClassName("hts");
  var dots = document.getElementsByClassName("htsDemo");
  var captionText = document.getElementById("htsCaption");
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
// HTS functionality