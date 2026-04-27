// Versión del sistema
const version = '1.2.0';

// Función de saludo
function saludar(nombre) {
    return `Hola, ${nombre}`;
}

// Función de health check
function healthCheck() {
    return {
        status: "OK",
        timestamp: new Date(),
        version: version,
        message: "sistemas yibert"
    };
}

// Función verificar sistema
function verificarSistema() {
    const resultado = healthCheck();

    const statusDiv = document.getElementById("status");

    statusDiv.textContent = `${resultado.message} - ${resultado.timestamp}`;

    if (resultado.status === "OK") {
        statusDiv.style.color = "green";
    } else {
        statusDiv.style.color = "red";
    }

    return resultado;
}

// Ejecutar cuando cargue la página
document.addEventListener("DOMContentLoaded", () => {
    verificarSistema();
});
