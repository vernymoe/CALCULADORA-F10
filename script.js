document.addEventListener("DOMContentLoaded", function () {
    const sectionSelect = document.getElementById("section");
    const label1 = document.getElementById("label1");
    const label2 = document.getElementById("label2");
    const label3 = document.getElementById("label3");
    const label4 = document.getElementById("label4");
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");
    const input4 = document.getElementById("input4");
    const resultText = document.getElementById("result");
    const calculateButton = document.getElementById("calculate");
    const clearButton = document.getElementById("clear");

    sectionSelect.addEventListener("change", function () {
        const selected = sectionSelect.value;

        if (selected === "Trabajo") {
            label1.textContent = "Fuerza neta (N)";
            label2.textContent = "Distancia (m)";
            label3.textContent = "Trabajo (J)";
            label4.textContent = "Ángulo (°)";
            input4.style.display = "block";
            label4.style.display = "block";
        } else if (selected === "Teorema de Trabajo y Energía") {
            label1.textContent = "Masa (kg)";
            label2.textContent = "Velocidad inicial (m/s)";
            label3.textContent = "Velocidad final (m/s)";
            input4.style.display = "none";
            label4.style.display = "none";
        } else if (selected === "Potencia") {
            label1.textContent = "Trabajo (J)";
            label2.textContent = "Tiempo (s)";
            label3.textContent = "Potencia (W)";
            input4.style.display = "none";
            label4.style.display = "none";
        } else if (selected === "Energía Cinética") {
            label1.textContent = "Masa (kg)";
            label2.textContent = "Velocidad (m/s)";
            label3.textContent = "Energía Cinética (J)";
            input4.style.display = "none";
            label4.style.display = "none";
        } else if (selected === "Energía Potencial Gravitacional") {
            label1.textContent = "Masa (kg)";
            label2.textContent = "Altura (m)";
            label3.textContent = "Energía Potencial (J)";
            input4.style.display = "none";
            label4.style.display = "none";
        } else if (selected === "Energía Potencial Elástica") {
            label1.textContent = "Constante elástica k (N/m)";
            label2.textContent = "Elongación (m)";
            label3.textContent = "Energía Potencial Elástica (J)";
            input4.style.display = "none";
            label4.style.display = "none";
        } else if (selected === "Energía Mecánica") {
            label1.textContent = "Energía Cinética (J)";
            label2.textContent = "Energía Potencial (J)";
            label3.textContent = "Energía Mecánica (J)";
            input4.style.display = "none";
            label4.style.display = "none";
        }
    });
});
