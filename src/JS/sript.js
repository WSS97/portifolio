function toggleMenu() {
    const menu = document.querySelector('.mobile-menu');
    const button = document.querySelector('.bars');

    if (menu && button) {
        if (menu.classList.contains('open')) {
            menu.classList.remove('open');
            button.classList.remove('opend');
        } else {
            menu.classList.add('open');
            button.classList.add('opend');
        }
    } else {
        console.error("Elemento com a classe 'menu-mobile' ou 'bars' não encontrado.");
    }
}