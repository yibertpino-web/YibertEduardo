function factorial(n) {
    if (n < 0) return "Error";
    if (n === 0) return 1;

    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

// Tests
console.log("Test 1:", factorial(5) === 120 ? "OK" : "FAIL");
console.log("Test 2:", factorial(0) === 1 ? "OK" : "FAIL");
console.log("Test 3:", factorial(-1) === "Error" ? "OK" : "FAIL");
