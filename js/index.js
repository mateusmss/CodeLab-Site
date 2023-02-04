const header = document.querySelector("header");

window.addEventListener("Scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
});

const slides = document.querySelectorAll(".row");
let index = 0;

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  index++;
  if (index > slides.length) {
    index = 1;
  }
  slides[index - 1].style.display = "block";
  setTimeout(showSlides, 9000);
}

showSlides();

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

prev.addEventListener("click", function () {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index].style.display = "block";
});

next.addEventListener("click", function () {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index].style.display = "block";
});