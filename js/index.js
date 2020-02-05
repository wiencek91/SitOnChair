let buttonPrev = document.querySelector('#prevSlide i');
let buttonNext = document.querySelector('#nextSlide i');
let list = document.querySelectorAll('.post');
let index = 0;

function reset() {
    for (let i = 0; i < list.length; i++){
        list[i].style.display = "none";
    }
}

function startSlide () {
    reset();
    list[0].style.display = "flex";
}

function slideLeft () {
    reset();
    list[index - 1].style.display = "flex";
    index--
}

function slideRight() {
    reset();
    list[index + 1].style.display = "flex";
    index++
}

buttonPrev.addEventListener("click", function () {
    if (index === 0) {
        index = list.length;
    }
    slideLeft()
});

buttonNext.addEventListener("click", function () {
    if (index === list.length -1) {
        index = -1;
    }
    slideRight();
});

startSlide();