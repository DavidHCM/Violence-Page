
document.addEventListener("DOMContentLoaded", function() {
    adjustHeightToViewport();

    window.addEventListener("resize", function() {
        adjustHeightToViewport();
    });
});

function adjustHeightToViewport() {
    // Lista de selectores de los elementos que deseas ajustar.
    var selectors = ['.background-iphone', '.diagonal-lines-iphone', '.rectangle-iphone'];

    // Altura de la ventana del navegador
    var windowHeight = window.innerHeight + 'px';

    // Ajustar la altura de cada elemento seleccionado.
    selectors.forEach(function(selector) {
        var elements = document.querySelectorAll(selector);
        elements.forEach(function(element) {
            element.style.height = windowHeight;
        });
    });
}
