// turn pages when click next or prev button
var pageTurnBtn = document.querySelectorAll('.next-prev-button');
pageTurnBtn.forEach(function (el, index) {
    el.onclick = function () {
        var pageTurnId = el.getAttribute('data-page');
        var pageTurn = document.getElementById(pageTurnId || '');
        if (pageTurn && pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(function () {
                pageTurn.style.zIndex = "".concat(20 - index);
            }, 500);
        }
        else if (pageTurn) {
            pageTurn.classList.add('turn');
            setTimeout(function () {
                pageTurn.style.zIndex = "".concat(20 + index);
            }, 500);
        }
    };
});
// contact me button when click
var pages = document.querySelectorAll('.book-page.page-right');
var contactMeBtn = document.querySelector('.btn.Contact-me');
contactMeBtn.onclick = function () {
    pages.forEach(function (page, index) {
        setTimeout(function () {
            page.classList.add('turn');
            setTimeout(function () {
                page.style.zIndex = "".concat(20 + index);
            }, 500);
        }, (index + 1) * 200 + 100);
    });
};
// create reverse index function
var totalPages = pages.length;
var pageNumber = 0;
function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}
// back profile button when click 
var backProfileBtn = document.querySelector('.back-profile');
backProfileBtn.onclick = function () {
    pages.forEach(function (_, index) {
        setTimeout(function () {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');
            setTimeout(function () {
                reverseIndex();
                pages[pageNumber].style.zIndex = "".concat(10 + index);
            }, 500);
        }, (index + 1) * 200 + 100);
    });
};
// opening animation
var coverRight = document.querySelector('.cover.cover-right');
var pageLeft = document.querySelector('.book-book.page-left');
// opening animation (cover right animation)
setTimeout(function () {
    coverRight.classList.add('turn');
}, 2100);
setTimeout(function () {
    coverRight.style.zIndex = '-1';
}, 2800);
// opening animation (page left or profile page animation)
setTimeout(function () {
    pageLeft.style.zIndex = '20';
}, 3200);
// opening animation (all pages right animation)
pages.forEach(function (_, index) {
    setTimeout(function () {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');
        setTimeout(function () {
            reverseIndex();
            pages[pageNumber].style.zIndex = "".concat(10 + index);
        }, 500);
    }, (index + 1) * 200 + 2100);
});
