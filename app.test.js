import { saludar, despedir, estadoSistema, sumar } from "../src/app.js";

function ejecutarPruebas() {
  let pasadas = 0;
  let fallidas = 0;

  const r1 = saludar("Rider");
  if (r1.includes("Rider")) {
    console.log("Test 1 pasado: funcion saludar en CodeRider es correcta");
    pasadas++;
  } else {
    console.log("Test 1 fallido:", r1);
    fallidas++;
  }

  const actualEstado = estadoSistema();
  if (actualEstado.estado === "activo") {
    console.log("Test 2 pasado: estadoSistema() funciona en CodeRider");
    pasadas++;
  } else {
    console.log("Test 2 fallido:", actualEstado.estado, "en CodeRider");
    fallidas++;
  }

  const resultadoSuma = sumar(10, 5);
  if (resultadoSuma === 15) {
    console.log("Test 3 pasado: funcion sumar(10, 5) es correcta (15)");
    pasadas++;
  } else {
    console.log("Test 3 fallido: se esperaba 15, se obtuvo", resultadoSuma);
    fallidas++;
  }

  function healthCheck() {
    return { status: "ok" };
  }

  const health = healthCheck();

  if (health.status === "ok") {
    console.log("Test 4 pasado: healthCheck funciona correctamente");
    pasadas++;
  } else {
    console.log("Test 4 fallido:", health);
    fallidas++;
  }

  console.log("\nResultados: " + pasadas + " pasadas, " + fallidas + " fallidas");

  if (fallidas > 0) process.exit(1);
}

ejecutarPruebas();
