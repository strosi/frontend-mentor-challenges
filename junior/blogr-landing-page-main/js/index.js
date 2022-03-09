const menuBtns = document.querySelectorAll('.header-top__submenu-toggle');
let activeBtn = null;

document.addEventListener('click', (e) => {
    if(Array.from(menuBtns).includes(e.target)) {
        e.preventDefault();

        if (e.target.isEqualNode(activeBtn)) {
            activeBtn = closeSubMenu(e.target);
        } else {
            activeBtn = openSubMenu(e.target, activeBtn);
        }
    } else {
        if(activeBtn) {
            activeBtn = closeSubMenu(activeBtn);
        }
    }
});

const openSubMenu = (clickedBtn, activeBtn) => {
    if (activeBtn) {
        activeBtn.classList.remove('active');
    }
    clickedBtn.classList.add('active');
    return clickedBtn;
}

const closeSubMenu = (clickedBtn) => {
    clickedBtn.classList.remove('active');
    return null;
}