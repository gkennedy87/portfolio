function toggleBurger(x) {
    x.classList.toggle("change");
    const menu = document.querySelector('.navbar-links')
    menu.classList.toggle('show-menu');
}