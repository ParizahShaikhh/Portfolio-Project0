// turn pages when click next or preview button
const pageTurnBtn = document.querySelectorAll(".nextprev-btn");

pageTurnBtn.forEach((el, index) => {
el.onclick = () => {
    const pagesTurnId = el.getAttribute("data-page");
    const pagesTurn = document.getElementById(pagesTurnId);

    if (pagesTurn.classList.contains("turn")) {
        pagesTurn.classList.remove("turn");
        setTimeout(() => {
            pagesTurn.style.zIndex = 20 - index;
        }, 500)
    } else {
        pagesTurn.classList.add("turn");
        setTimeout(() => {
            pagesTurn.style.zIndex = 20 + index;
        }, 500)
    }
}
});

// contact me button when click
const pages = document.querySelectorAll(".book-page.page-right");
const contactMeBtn = document.querySelectorAll(".btn.contact-me");

contactMeBtn.onclick = () => {


        pages.forEach((page, index) => {
            setTimeout(() => {
                page.classList.add("turn");

                setTimeout(() => {
                    page.style.zIndex = 20 + index;
                }, 500)
            }, (index + 1) * 200 + 100)
        })
    }


// create reverse maping index function
let totalPages = pages.length;

let pagesNumber = 0;

function reverseIndex() {
    pagesNumber--;
    if (pagesNumber < 0) {
        pagesNumber = totalPages - 1;
    }
}

// back profile button when click

const backProfileBtn = document.querySelector(".back-profile");

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pagesNumber].classList.remove("turn");

setTimeout(() => {
    reverseIndex();
    pages[pagesNumber].style.zIndex = 10 + index;
}, (index + 1) * 200 + 2100)

        }, (index + 1) * 200 + 100)
    })
}

// opening animation
const coverRight = document.querySelector(".cover.cover-right");
const pageLeft = document.querySelector(".book-page.page-left");


// opening animation (cover right animation)
setTimeout(() => {

    coverRight.classList.add("turn");


}, 2100)

setTimeout(() => {

coverRight.style.zIndex = -1;


}, 2800)

// opening animation (page left or profile page animation)
setTimeout(() => {

    pageLeft.style.zIndex = 20;


}, 3200)

// opening animation (all pages right animation)
pages.forEach((_, index) => {
setTimeout(() => {
    reverseIndex();
    pages[pagesNumber].classList.remove("turn");

    setTimeout(() => {
        reverseIndex();
[pagesNumber].style.zIndex = 10 + index;

    }, 500)
}, (index + 1) * 200 + 2100)

})