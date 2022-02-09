function openMenu(btn) {
    const btnElements = btn.children;
    const expanded = btn.getAttribute('aria-expanded') === 'true' || false;
    const parent = btn.parentElement.parentElement.parentElement;
    const optMenuEl = parent.querySelector('.opt-menu');

    if (!expanded) {
        // OPEN the options menu

        btn.setAttribute('aria-expanded', !expanded);
        Array.from(btnElements).forEach(el => el.classList.add('stat-content__btn-el_close'));
        showOptions(optMenuEl);
    } else {
        // CLOSE the options menu

        btn.setAttribute('aria-expanded', !expanded);
        Array.from(btnElements).forEach(el => el.classList.remove('stat-content__btn-el_close'));
        hideOptions(optMenuEl);
    }
}

const showOptions = (menuEl) => {
    menuEl.classList.remove('opt-menu_hidden');
    
    setTimeout(() => {
        menuEl.classList.add('opt-menu_scale');
    }, 1);
}

const hideOptions = (menuEl) => {
    menuEl.classList.remove('opt-menu_scale');
    setTimeout(() => {
        menuEl.classList.add('opt-menu_hidden');
    }, 200);
}