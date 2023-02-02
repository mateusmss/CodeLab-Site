const header = document.querySelector("header");

window.addEventListener("Scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
});