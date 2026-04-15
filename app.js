export function saludar(nombre) {
  return `Hola ${nombre}, bienvenido a la aplicación de Yibert!`;
}

export function despedir(nombre) {
  return `Hasta pronto, ${nombre}! - Yibert`;
}

export function estadoSistema() {
  return {
    estado: "activo",
    version: "1.0.0",
    mensaje: "Sistema Coderider funcionando correctamente"
  };
}

export function suma(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}

export function healthCheck() {
  return {
    status: "ok",
    timestamp: new Date().toISOString(),
    servicio: "streamFlOW",
    version: "1.0.0"
  };
}
function factorial(n) {
  if (n < 0) return null;
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

module.exports = factorial;
const factorial = require('./app');

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1


