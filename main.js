// Seleziono div hamburger-menu
const menu = document.querySelector('.hamburger-menu');

// Seleziono elemento da attivare
const show = document.querySelector('.header-right a i');

// Chiudo menù
const hidden = document.querySelector('.close i');

// Collego classe css per visualizzare menù
show.addEventListener('click', function () {
    menu.classList.add('active');
})

// Chiudo visualizzazione menù
hidden.addEventListener('click', function () {
    menu.classList.remove('active');
})