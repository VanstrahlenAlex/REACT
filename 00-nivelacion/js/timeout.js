const evaluar = () => {
    const edad = prompt("¿Cuál es tu edad?")

    if (edad < 18) {
        alert("Eres menor de edad, saca la cedula por favor")
        return
    }

    alert("Mayor de edad")
}

setTimeout(evaluar, 5000);
// prompt = función para preguntar al usuario