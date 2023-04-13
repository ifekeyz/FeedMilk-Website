var ham = document.querySelector (".hamburger-icon")
var div = document.querySelector(".nav-links")

ham.addEventListener("click", () => {
    ham.classList.toggle("active")
    div.classList.toggle("active")
});

document.querySelectorAll("a").forEach(n => n.addEventListener("click", () => {
    ham.classList.remove("active")
    div.classList.remove("active")
}));