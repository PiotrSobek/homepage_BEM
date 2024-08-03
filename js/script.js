console.log("Treść artykułów na stronie została zapożyczona z: https://akademiacapoeira.pl/capoeira/");

let button = document.querySelector(".button");
let article = document.querySelector(".article");
let article__header = document.querySelector(".article__header");
let subHeader = document.querySelectorAll(".article__subHeader");
let tableCell = document.querySelectorAll(".article__tableCell");
let tableHeader = document.querySelectorAll(".article__tableHeader");
let box = document.querySelector(".article__box")
let themeName = document.querySelector(".themeName");
let body = document.querySelector(".body");
let navigation__text = document.querySelectorAll(".navigation__text");
let header = document.querySelector(".header");
let aside__paragraph = document.querySelector(".aside__paragraph");
let footer__paragraph = document.querySelector(".footer__paragraph");

button.addEventListener("click", () => {
    article.classList.toggle("article__webTableChangeAll");
    body.classList.toggle("body--dark");
    header.classList.toggle("header--dark");
    aside__paragraph.classList.toggle("aside--dark");
    footer__paragraph.classList.toggle("footer--dark");
    button.classList.toggle("button--dark")
    article__header.classList.toggle("article__webTableChange");
    box.classList.toggle("article__webTableChangeBox");
    themeName.innerText = article.classList.contains("article__webTableChangeAll") ? "jasny" : "ciemny"
    
    subHeader.forEach((e) => {e.classList.toggle("article__webTableChange")});  
    tableCell.forEach((e) => {e.classList.toggle("article__tableCellDark")});  
    tableHeader.forEach((e) => {e.classList.toggle("article__tableHeaderDark")});  
    navigation__text.forEach((e) => {e.classList.toggle("navigation--dark")});  
});

