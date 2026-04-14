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
  return null;
}


