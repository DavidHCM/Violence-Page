document.addEventListener('DOMContentLoaded', function() {
    const botonMenu = document.querySelector('.menu'); // Selecciona el botón del menú
    const menu = document.querySelector('.menu-abierto');
    const closeMenu = document.querySelector('.close')

    botonMenu.addEventListener('click', function() {
        menu.classList.toggle('mostrar');
    });

    closeMenu.addEventListener('click', () =>{
        menu.classList.toggle('mostrar');
    })
});


