let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
};

searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});

let loginForm = document.querySelector(".login-form-container");
let loginBtn = document.querySelector("#login-btn");
let formCloseBtn = document.querySelector("#form-close");

loginBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
});

formCloseBtn.addEventListener("click", () => {
  loginForm.classList.remove("active");
});

let navbar = document.querySelector(".navbar");
let menuBtn = document.querySelector("#menu-bar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuBtn.classList.toggle("fa-times");
});
