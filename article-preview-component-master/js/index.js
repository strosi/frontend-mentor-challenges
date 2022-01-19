const changeBtnStyle = (isOpen) => {
    const btn = document.querySelector("#tooltipbtn");

    if(!isOpen) {
        btn.classList.add("dark-btn");
    } else {
        btn.classList.remove("dark-btn");
    }
}

const toggleTooltip = () => {
    // const btn = document.querySelector("#tooltipbtn");
    const footerBox = document.querySelector(".article-content__footer");
    const authorInfo = document.querySelector(".article-content__author-info");
    const tooltip = document.querySelector("#sharelinks");
    const isOpen = tooltip.classList.contains("open");

    console.log(isOpen);

    if(!isOpen) {
        tooltip.classList.add("open");
        // btn.classList.add("dark-btn");
        changeBtnStyle(isOpen);
        footerBox.classList.add("move-footer");
        authorInfo.classList.add("hidden");
    } else {
        tooltip.classList.remove("open");
        // btn.classList.remove("dark-btn");
        changeBtnStyle(isOpen);
        footerBox.classList.remove("move-footer");
        authorInfo.classList.remove("hidden");
    }
}