window.addEventListener("load", () => {
    document.querySelector(".header").classList.add("loaded");
});

// Show elements on entering the viewport
/*
.about__content-title,
.about__content-text,
.about__learn-more,
.service__title,
.service__text,
.client
*/
let slideElArr = [];
slideElArr.push(...document.querySelectorAll('.about__content-title'));
slideElArr.push(...document.querySelectorAll('.about__content-text'));
slideElArr.push(...document.querySelectorAll('.about__learn-more'));
slideElArr.push(...document.querySelectorAll('.service__title'));
slideElArr.push(...document.querySelectorAll('.service__text'));
slideElArr.push(...document.querySelectorAll('.client'));
let timeout;

if (slideElArr != null) {
    window.addEventListener('scroll', function (event) {

        // If there's a timer, cancel it
        if (timeout) {
            window.cancelAnimationFrame(timeout);
        }

        // Setup the new requestAnimationFrame()
        timeout = window.requestAnimationFrame(function () {
            for (let i = 0; i < slideElArr.length; i++) {
                if (slideElArr[i].getBoundingClientRect().top < (window.innerHeight - 70)) {
                    slideElArr[i].classList.add('slide-in');
                    slideElArr[i].style.transitionDelay = 20 * i + 'ms';
                }
            }
        });

    }, false);
}