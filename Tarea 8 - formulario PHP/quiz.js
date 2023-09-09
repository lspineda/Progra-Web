function calificarFormulario() {
    // Obtener las respuestas seleccionadas por el usuario
    const respuestas = {
        q1: document.querySelector('input[name="q1"]:checked'),
        q2: document.querySelector('input[name="q2"]:checked'),
        q3: document.querySelector('input[name="q3"]:checked'),
        q4: document.querySelector('input[name="q4"]:checked'),
    };

    // Definir las respuestas correctas
    const respuestasCorrectas = {
        q1: "b",
        q2: "a",
        q3: "b",
        q4: "c",
    };

    // Contar las respuestas correctas
    let respuestasCorrectasCount = 0;
    for (const pregunta in respuestas) {
        if (respuestas.hasOwnProperty(pregunta) && respuestas[pregunta] && respuestas[pregunta].value === respuestasCorrectas[pregunta]) {
            respuestasCorrectasCount++;
        }
    }

    // Mostrar una alerta con el resultado
    alert(`${respuestasCorrectasCount} respuestas correctas de 4.`);
}
