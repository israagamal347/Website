const imgList = Array.from(document.querySelectorAll('img'));
const screen = document.querySelector('.screen');
const imgScreen = document.querySelector('.img-screen');
const close = document.getElementById('cancel');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
let currentIndex = 0;


for (let i = 0; i < imgList.length; i++) {

    imgList[i].addEventListener('click', function (e) {
        currentIndex = imgList.indexOf(e.target);
        screen.style.cssText = 'display: flex!important';
        let img = e.target.getAttribute('src');
        imgScreen.style.backgroundImage = `url(${img})`;
    })

    close.addEventListener('click', hideScreen)
    function hideScreen() {
        screen.style.cssText = 'display: none!important';
    }

    next.addEventListener('click', showNext)
    function showNext() {
        currentIndex++;
        if (currentIndex == imgList.length) {
            currentIndex = 0;
        }
        let img = imgList[currentIndex].getAttribute('src');
        imgScreen.style.backgroundImage = `url(${img})`;
    }

    previous.addEventListener('click', showPrevious)
    function showPrevious() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = imgList.length - 1;
        }
        let img = imgList[currentIndex].getAttribute('src');
        imgScreen.style.backgroundImage = `url(${img})`;
    }
}