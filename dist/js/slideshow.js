let currentSlideIndex = 0;

let slides = document.querySelectorAll(".slides");
let prev = document.querySelector(".slideshow-nav .prev");
let next = document.querySelector(".slideshow-nav .next");

let lastSlideIndex = slides.length - 1;
let firstSlideIndex = 0;

function goLeft() {
  slides[currentSlideIndex].classList.remove("active");

  currentSlideIndex = currentSlideIndex === firstSlideIndex ? lastSlideIndex : currentSlideIndex - 1;

  slides[currentSlideIndex].classList.add("active");
}

function goRight() {
  slides[currentSlideIndex].classList.remove("active");
  
  currentSlideIndex = currentSlideIndex === lastSlideIndex ? firstSlideIndex : currentSlideIndex + 1;
  
  slides[currentSlideIndex].classList.add("active");
}

prev.addEventListener("click", goLeft);
next.addEventListener("click", goRight);

setInterval(goRight, 8000);