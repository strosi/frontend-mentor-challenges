function showOptions(btn) {
    let btnElements = btn.children;
    let expanded = btn.getAttribute('aria-expanded') === 'true' || false;

    if (!expanded) {
        btn.setAttribute('aria-expanded', !expanded);
        Array.from(btnElements).forEach(el => el.classList.add('stat-content__btn-el_close'));
    } else {
        btn.setAttribute('aria-expanded', !expanded);
        Array.from(btnElements).forEach(el => el.classList.remove('stat-content__btn-el_close'));
    }
}