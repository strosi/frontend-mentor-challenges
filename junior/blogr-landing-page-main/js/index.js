const menuBtns = document.querySelectorAll('.header-top__submenu-toggle');
let activeBtn = null;

menuBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.isEqualNode(activeBtn)) {
            e.target.classList.remove('active');
            activeBtn = null;
        } else {
            if (activeBtn) {
                activeBtn.classList.remove('active');
            }
            e.target.classList.add('active');
            activeBtn = e.target;
        }
    });
});