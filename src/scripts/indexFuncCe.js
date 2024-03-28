document.addEventListener('DOMContentLoaded', function() {
    const botonMenu = document.querySelector('.menu'); // Selecciona el botón del menú
    const menu = document.querySelector('.menu-abierto');

    botonMenu.addEventListener('click', function() {
        menu.classList.toggle('mostrar');
    });


});

function dat ()
{
    console.log("Asd")
}