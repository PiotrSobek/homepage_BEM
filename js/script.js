{
    const welcome = () => {
        console.log("Treść artykułów na stronie została zapożyczona z: https://akademiacapoeira.pl/capoeira/");
    }

    const onChangeBackgroundClick = () => {
        const button = document.querySelector(".button");
        const article = document.querySelector(".article");
        const article__header = document.querySelector(".article__header");
        const subHeader = document.querySelectorAll(".article__subHeader");
        const tableCell = document.querySelectorAll(".article__tableCell");
        const tableHeader = document.querySelectorAll(".article__tableHeader");
        const box = document.querySelector(".article__box")
        const themeName = document.querySelector(".themeName");
        const body = document.querySelector(".body");
        const navigation__text = document.querySelectorAll(".navigation__text");
        const header = document.querySelector(".header");
        const aside__paragraph = document.querySelector(".aside__paragraph");
        const footer__paragraph = document.querySelector(".footer__paragraph");

        article.classList.toggle("article__webTableChangeAll");
        body.classList.toggle("body--dark");
        header.classList.toggle("header--dark");
        aside__paragraph.classList.toggle("aside--dark");
        footer__paragraph.classList.toggle("footer--dark");
        button.classList.toggle("button--dark")
        article__header.classList.toggle("article__webTableChange");
        box.classList.toggle("article__webTableChangeBox");
        themeName.innerText = article.classList.contains("article__webTableChangeAll") ? "jasny" : "ciemny"

        subHeader.forEach((e) => { e.classList.toggle("article__webTableChange") });
        tableCell.forEach((e) => { e.classList.toggle("article__tableCellDark") });
        tableHeader.forEach((e) => { e.classList.toggle("article__tableHeaderDark") });
        navigation__text.forEach((e) => { e.classList.toggle("navigation--dark") });
    }

    const init = () => {
        const button = document.querySelector(".button");
        button.addEventListener("click", onChangeBackgroundClick);
        welcome()
    }

    init()
}

