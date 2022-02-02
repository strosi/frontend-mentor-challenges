(function (doc) {
    let timer = 0;
    const incr = 300;

    ingoingAnim();

    function ingoingAnim() {
        const texts = doc.querySelectorAll(".animation");
        const btnCont = doc.querySelector(".intro-content__btn");
        const btnText = doc.querySelector(".intro-content__btn-link");

        texts.forEach((t) => {
            t.classList.add("hidden");
        });
        btnCont.classList.add("btn-anim", "btn-scale");
        btnText.classList.add("btn-text-hidden");

        texts.forEach((t) => {
            setTimeout(() => {
                t.classList.remove("hidden");
            }, timer += incr);
        });

        setTimeout(() => {
            btnCont.classList.remove("btn-scale");
        }, timer += incr);

        setTimeout(() => {
            btnCont.classList.remove("btn-anim");
        }, timer += incr);

        setTimeout(() => {
            btnText.classList.remove("btn-text-hidden");
        }, timer += incr);
    }
})(document);