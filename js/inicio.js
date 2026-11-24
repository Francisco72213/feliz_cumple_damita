
// ==========================================
// APP CUMPLE - PANTALLA DE INICIO
// ==========================================

// Contraseña principal
const CONTRASENA_PRINCIPAL = "MiDamita2026";

// Elementos del HTML
const formulario = document.getElementById("formulario-acceso");
const campoContrasena = document.getElementById("contrasena");
const mensajeError = document.getElementById("mensaje-error");

// Validar el formulario
formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const contrasenaIngresada = campoContrasena.value.trim();

    mensajeError.textContent = "";

    if (contrasenaIngresada === CONTRASENA_PRINCIPAL) {

        // Autorizar el acceso durante esta sesión
        sessionStorage.setItem("accesoAutorizado", "true");

        mensajeError.textContent = "¡Bienvenida a tu sorpresa! ♡";
        mensajeError.style.color = "#8A6B9B";

        // Abrir el menú principal
        setTimeout(function () {
            window.location.href = "menu.html";
        }, 1000);

    } else {

        mensajeError.textContent =
            "Esa no es la clave, mi damita. Inténtalo nuevamente ♡";

        mensajeError.style.color = "#C07891";

        campoContrasena.value = "";
        campoContrasena.focus();
    }
});
