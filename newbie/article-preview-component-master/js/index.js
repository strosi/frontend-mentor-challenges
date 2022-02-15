// 650 px is the min-width of media query.
const mqMaxWidth = 650;

const isTooltipOpen = () => {
    const tooltip = document.querySelector("#sharelinks");
    const isOpen = tooltip.classList.contains("open");

    return isOpen;
}

const showTooltip = (isOpen) => {
    const tooltip = document.querySelector("#sharelinks");

    if(!isOpen) {
        tooltip.classList.add("open");
    } else {
        tooltip.classList.remove("open");
    }
}

const changeBtnStyle = (isOpen) => {
    const btn = document.querySelector("#tooltipbtn");

    if(!isOpen) {
        btn.classList.add("dark-btn");
    } else {
        btn.classList.remove("dark-btn");
    }
}

const moveFooterBox = (isOpen) => {
    const footerBox = document.querySelector(".article-content__footer");

    if(!isOpen) {
        footerBox.classList.add("move-footer");
    } else {
        footerBox.classList.remove("move-footer");
    }
}

const hideAuthor = (isOpen) => {
    const authorInfo = document.querySelector(".article-content__author-info");

    if(!isOpen) {
        authorInfo.classList.add("hidden");
    } else {
        authorInfo.classList.remove("hidden");
    }
}

const toggleTooltip = () => {
    const isOpen = isTooltipOpen();

    showTooltip(isOpen);
    changeBtnStyle(isOpen);

    // Only in mobile view the author would be hidden and
    // the footer's padding-bottom would be reduced.
    if(window.innerWidth < mqMaxWidth) {
        moveFooterBox(isOpen);
        hideAuthor(isOpen);
    } else {
        
    }
}

window.onresize = () => {
    const isOpen = isTooltipOpen();

    // Only if window width < 650px the author would be hidden 
    // and the footer's padding-bottom would be reduced
    // while resizing the screen.
    if(isOpen) {
        if(window.innerWidth > mqMaxWidth) {
            moveFooterBox(isOpen);
            hideAuthor(isOpen);
        } else {
            moveFooterBox(!isOpen);
            hideAuthor(!isOpen);
        }
    }
}