var ham = document.querySelector (".hamburger-icon")
var div = document.querySelector(".nav-links")

var f1plus = document.querySelector(".faq1-plus")
var f1ans = document.querySelector(".faq1-answer")
var f1ansText = document.querySelector(".faq1-answer-text")

var f2plus = document.querySelector(".faq2-plus")
var f2ans = document.querySelector(".faq2-answer")
var f2ansText = document.querySelector(".faq2-answer-text")

var f3plus = document.querySelector(".faq3-plus")
var f3ans = document.querySelector(".faq3-answer")
var f3ansText = document.querySelector(".faq3-answer-text")

var f4plus = document.querySelector(".faq4-plus")
var f4ans = document.querySelector(".faq4-answer")
var f4ansText = document.querySelector(".faq4-answer-text")

ham.addEventListener("click", () => {
    ham.classList.toggle("active")
    div.classList.toggle("active")
});

document.querySelectorAll("a").forEach(n => n.addEventListener("click", () => {
    ham.classList.remove("active")
    div.classList.remove("active")
}));

f1plus.addEventListener("click", () => {
    f1ans.classList.toggle("show")
    f1plus.classList.toggle("show")
    f1ansText.classList.toggle("show")
});

f2plus.addEventListener("click", () => {
    f2ans.classList.toggle("show")
    f2plus.classList.toggle("show")
    f2ansText.classList.toggle("show")
});

f3plus.addEventListener("click", () => {
    f3ans.classList.toggle("show")
    f3plus.classList.toggle("show")
    f3ansText.classList.toggle("show")
});

f4plus.addEventListener("click", () => {
    f4ans.classList.toggle("show")
    f4plus.classList.toggle("show")
    f4ansText.classList.toggle("show")
});