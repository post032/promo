
var link1 = document.querySelector("#link1");
var link2 = document.querySelector("#link2");
var link3 = document.querySelector("#link3");
var link4 = document.querySelector("#link4");
var popup1 = document.querySelector("#open-link1");
var popup2 = document.querySelector("#open-link2");
var popup3 = document.querySelector("#open-link3");
var popup4 = document.querySelector("#open-link4");
var close1 = popup1.querySelector(".stock__about-close");
var close2 = popup2.querySelector(".stock__about-close");
var close3 = popup3.querySelector(".stock__about-close");
var close4 = popup4.querySelector(".stock__about-close");

link1.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup1.classList.add("stock__about-show");
});

close1.addEventListener("click", function (e) {
    e.preventDefault();
    popup1.classList.remove("stock__about-show");
});

link2.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup2.classList.add("stock__about-show");
});

close2.addEventListener("click", function (e) {
    e.preventDefault();
    popup2.classList.remove("stock__about-show");
});

link3.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup3.classList.add("stock__about-show");
});

close3.addEventListener("click", function (e) {
    e.preventDefault();
    popup3.classList.remove("stock__about-show");
});

link4.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup4.classList.add("stock__about-show");
});

close4.addEventListener("click", function (e) {
    e.preventDefault();
    popup4.classList.remove("stock__about-show");
});
