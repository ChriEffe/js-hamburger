// Seleziono div hamburger-menu
const menu = document.querySelector('div:last-child');

// Selezino elemento da attivare
const show = document.querySelector('.fa-bars');

// Chiudo menù
const hidden = document.querySelector('.fa-times');

// Collego classe css per visualizzare menù
show.addEventListener('click', function () {
    menu.classList.add('active');
})

// Chiudo visualizzazione menù
hidden.addEventListener('click', function () {
    menu.classList.remove('active');
})