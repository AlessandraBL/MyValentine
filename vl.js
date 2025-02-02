// script.js
function respuesta(acepta) {
    let mensaje = document.getElementById("mensaje");
    let imagen = document.getElementById("imagen");
    let resultado = document.getElementById("resultado");
    
    if (acepta) {
        mensaje.textContent = "¡YEIIII, Tenemos una cita!, PONTE WAPOTE (❁´◡`❁)💖";
        
        imagen.src = "feli.jpg"; // Reemplaza con una foto de ustedes
    } else {
        mensaje.textContent = "Pero.. pero.., Por qué no?😿";
        imagen.src = "triste.jpg"; // Imagen de gatito llorando
    }
    // script.js
window.onload = function() {
    var audio = new Audio('tu-musica.mp3');  // Ruta del archivo
    audio.loop = true;  // Hacer que se repita
    audio.play();  // Reproducir al cargar
}

    resultado.classList.remove("hidden");
    
}