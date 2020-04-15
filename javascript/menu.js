window.addEventListener('load', () => {
    let btnMenu = document.querySelector('.line-wrapp');
    let actionMenu = document.querySelector('.link-wrapp');
    let closeMenu = document.querySelector('.menu-close');

    btnMenu.addEventListener('click', () => {
        actionMenu.style.bottom = 0 + 'vh';
    });
    closeMenu.addEventListener('click', () => {
        actionMenu.style.bottom = 100 + 'vh';
    });
});