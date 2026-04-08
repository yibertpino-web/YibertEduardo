export function saludar(nombre) {
  return `Hola ${nombre}, bienvenido a la aplicación de Yibert!`;
}

export function despedir(nombre) {
  return `Hasta pronto ${nombre}! Yibert`;
}

export function estadosistema() {
  return {
    estado: "activo",
    version: "1.0.0",
    mensaje: "Sistema Coderider funcionando correctamente"
  };
}
export function suma(a, b) {
  return a + b;
}
function restar(a, b) {
  return a - b;
}

// Test
if (restar(5, 3) === 2) {
  console.log("✅ Test correcto");
} else {
  console.log("❌ Error en la función");
}
