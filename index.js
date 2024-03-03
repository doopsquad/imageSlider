let nextSlide = document.getElementById('next');
let previousSlide = document.getElementById('previous');
let images = document.getElementsByClassName('img');

let slidePosition = 0;
let interval = null;

document.addEventListener('DOMContentLoaded', initalization);

function initalization()
 {
    if (images.length > 0) {
    images[slidePosition].classList.add('display');
    }
}

 function show(index) {

    for (let x = 0; x < images.length; x++) {
        images[x].classList.remove('display');
    }

    images[index].classList.add('display');
 }

 function next() {
    if (slidePosition >= 2) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    show(slidePosition);
    console.log(slidePosition);
 }

 function previous() {
    if (slidePosition <= 0) {
        slidePosition = images.length - 1;
    } else {
        slidePosition--;
    }
    show(slidePosition);
    console.log(slidePosition);

 }

nextSlide.addEventListener('click', next);

previousSlide.addEventListener('click', previous);