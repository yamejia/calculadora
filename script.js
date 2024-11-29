document.getElementById('calcularBtn').addEventListener('click', function () {
    let totalNota = 0;
    let totalPorcentaje = 0;

    for (let i = 1; i <= 7; i++) {
        let nota = parseFloat(document.getElementById('nota' + i).value);
        let porcentaje = parseFloat(document.getElementById('porcentaje' + i).value);

        // Verificar si hay valores inválidos
        if (isNaN(nota) || isNaN(porcentaje) || nota < 0 || nota > 5 || porcentaje < 0 || porcentaje > 100) {
            alert("Por favor, ingresa valores válidos para las notas y porcentajes.");
            return;
        }

        totalNota += nota * (porcentaje / 100);
        totalPorcentaje += porcentaje;
    }

    if (totalPorcentaje !== 100) {
        alert("El total de los porcentajes debe ser igual al 100%");
        return;
    }

    // Mostrar la nota final con 2 decimales
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Tu nota final es: ${totalNota.toFixed(2)}`;

    // Verificar si la nota es menor a 2.99
    if (totalNota < 2.99) {
        const diferencia = (2.99 - totalNota).toFixed(2);
        resultado.textContent += ` - ¡Esfuérzate un poco más! Necesitas ${diferencia} más para ganar la asignatura.`;
    }
});
