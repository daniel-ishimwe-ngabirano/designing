let nextbutton = document.getElementById("next");
let prevbutton = document.getElementById("prev");
let backbutton = document.getElementById("back");
let seeMoreButoons = document.querySelectorAll(".seeMore");
let carousel = document.querySelector(".carousel");
let listHTML = document.querySelector('.carousel .list');

nextbutton.onclick = function() {
    showslide('next');
}
prevbutton.onclick = function() {
    showslide('prev');
}
let unAcceptClick;
const showslide = (type) => {
    nextbutton.style.pointerEvents = 'none';
    prevbutton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next') {
        listHTML.appendChild(items[0]);
        carousel.classList.add('next')
    }else{
        let positionLast = items.length - 1;
        listHTML.prepend(items[positionLast]);
        carousel.classList.add('prev')
    }

    clearTimeout(unAcceptClick);
    unAcceptClick = setTimeout(() => {
        nextbutton.style.pointerEvents = 'none';
        prevbutton.style.pointerEvents = 'none';
    }, 2000)
seeMoreButoons.forEach((button) => {
    button.onclick = function() {
        carousel.classList.add('showDetail');
    }
})
}
backbutton.onclick = function() {
    corousel.classList.remove('showDetail');
}