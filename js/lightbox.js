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

function rwOpenModal() {
  document.getElementById("rwModal").style.display = "block";
}

function cesaOpenModal() {
  document.getElementById("cesaModal").style.display = "block";
}

function healthTradeOpenModal() {
  document.getElementById("healthTrade").style.display = "block";
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

function rwCloseModal() {
  document.getElementById("rwModal").style.display = "none";
}

function cesaCloseModal() {
  document.getElementById("cesaModal").style.display = "none";
}

function healthTradeCloseModal() {
  document.getElementById("healthTrade").style.display = "none";
}
//End Close Modal functions


// MTL functionality
var slideIndex = 1;
mtlGalerySlide(slideIndex);

function mtlPlusSlides(n) {
  mtlGalerySlide(slideIndex += n);
}

function mtlCurrentSlide(n) {
  mtlGalerySlide(slideIndex = n);
}

function mtlGalerySlide(n) {
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
jrGalerySlide(slideIndex);

function jrPlusSlides(n) {
  jrGalerySlide(slideIndex += n);
}

function jrCurrentSlide(n) {
  jrGalerySlide(slideIndex = n);
}

function jrGalerySlide(n) {
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
neweraGalerySlide(slideIndex);

function neweraPlusSlides(n) {
  neweraGalerySlide(slideIndex += n);
}

function neweraCurrentSlide(n) {
  neweraGalerySlide(slideIndex = n);
}

function neweraGalerySlide(n) {
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
elecdataGalerySlide(slideIndex);

function elecdataPlusSlides(n) {
  elecdataGalerySlide(slideIndex += n);
}

function elecdataCurrentSlide(n) {
  elecdataGalerySlide(slideIndex = n);
}

function elecdataGalerySlide(n) {
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


// RW functionality
var slideIndex = 1;
rwGalerySlide(slideIndex);

function rwPlusSlides(n) {
  rwGalerySlide(slideIndex += n);
}

function rwCurrentSlide(n) {
  rwGalerySlide(slideIndex = n);
}

function rwGalerySlide(n) {
  var i;
  var slides = document.getElementsByClassName("rw");
  var dots = document.getElementsByClassName("rwDemo");
  var captionText = document.getElementById("rwCaption");
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
// End RW functionality

// CESA functionality
var slideIndex = 1;
cesaGalerySlide(slideIndex);

function cesaPlusSlides(n) {
  cesaGalerySlide(slideIndex += n);
}

function cesaCurrentSlide(n) {
  cesaGalerySlide(slideIndex = n);
}

function cesaGalerySlide(n) {
  var i;
  var slides = document.getElementsByClassName("cesa");
  var dots = document.getElementsByClassName("cesaDemo");
  var captionText = document.getElementById("cesaCaption");
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
// End

// Health Trade functionality
var slideIndex = 1;
healthTradeGalerySlide(slideIndex);

function healthTradePlusSlides(n) {
  healthTradeGalerySlide(slideIndex += n);
}

function healthTradeCurrentSlide(n) {
  healthTradeGalerySlide(slideIndex = n);
}

function healthTradeGalerySlide(n) {
  var i;
  var slides = document.getElementsByClassName("healthTrade");
  var dots = document.getElementsByClassName("healthTradeDemo");
  var captionText = document.getElementById("healthTradeCaption");
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
// End health Trade functionality