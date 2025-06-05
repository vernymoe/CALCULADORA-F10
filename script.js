
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
    const angleGroup = document.getElementById("angle-group");
    const result = document.getElementById("result");

    sectionSelect.addEventListener("change", updateLabels);
    document.getElementById("calculate").addEventListener("click", calculate);
    document.getElementById("clear").addEventListener("click", clearInputs);

    function updateLabels() {
        const selected = sectionSelect.value;
        label4.style.display = angleGroup.style.display = "none";

        switch (selected) {
            case "Trabajo":
                label1.textContent = "Fuerza neta (N)";
                label2.textContent = "Distancia (m)";
                label3.textContent = "Trabajo (J)";
                label4.textContent = "Ángulo (θ en grados)";
                label4.style.display = angleGroup.style.display = "block";
                break;
            case "Teorema de Trabajo y Energía":
                label1.textContent = "Masa (kg)";
                label2.textContent = "Velocidad inicial (m/s)";
                label3.textContent = "Velocidad final (m/s)";
                break;
            case "Potencia":
                label1.textContent = "Trabajo (J)";
                label2.textContent = "Tiempo (s)";
                label3.textContent = "Potencia (W)";
                break;
            case "Energía Cinética":
                label1.textContent = "Masa (kg)";
                label2.textContent = "Velocidad (m/s)";
                label3.textContent = "Energía Cinética (J)";
                break;
            case "Energía Potencial Gravitacional":
                label1.textContent = "Masa (kg)";
                label2.textContent = "Altura (m)";
                label3.textContent = "Energía Potencial Gravitacional (J)";
                break;
            case "Energía Potencial Elástica":
                label1.textContent = "Constante elástica k (N/m)";
                label2.textContent = "Elongación (m)";
                label3.textContent = "Energía Potencial Elástica (J)";
                break;
            case "Energía Mecánica":
                label1.textContent = "Energía Cinética (J)";
                label2.textContent = "Energía Potencial (J)";
                label3.textContent = "Energía Mecánica (J)";
                break;
        }
    }

    function toNumber(el) {
        return parseFloat(el.value) || null;
    }

    function round(value, decimals) {
        return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
    }

    function show(msg) {
        alert(msg);
    }

    function calculate() {
        const sel = sectionSelect.value;
        const v1 = toNumber(input1), v2 = toNumber(input2), v3 = toNumber(input3), v4 = toNumber(input4);

        switch (sel) {
            case "Trabajo":
                if (v1 != null && v2 != null && v4 != null) result.textContent = `W = ${round(v1 * v2 * Math.cos(v4 * Math.PI / 180), 2)} J`;
                else if (v3 != null && v2 != null && v4 != null) result.textContent = `F = ${round(v3 / (v2 * Math.cos(v4 * Math.PI / 180)), 2)} N`;
                else if (v3 != null && v1 != null && v4 != null) result.textContent = `d = ${round(v3 / (v1 * Math.cos(v4 * Math.PI / 180)), 2)} m`;
                else if (v3 != null && v1 != null && v2 != null) result.textContent = `θ = ${round(Math.acos(v3 / (v1 * v2)) * (180 / Math.PI), 2)}°`;
                else show("Ingrese tres valores para calcular el cuarto.");
                break;
            case "Teorema de Trabajo y Energía":
                if (v1 != null && v2 != null && v3 != null)
                    result.textContent = `W = ${round(0.5 * v1 * (v3 * v3 - v2 * v2), 2)} J`;
                else show("Ingrese masa y velocidades para calcular el trabajo.");
                break;
            case "Potencia":
                if (v1 != null && v2 != null) result.textContent = `P = ${round(v1 / v2, 2)} W`;
                else if (v1 != null && v3 != null) result.textContent = `t = ${round(v1 / v3, 2)} s`;
                else if (v2 != null && v3 != null) result.textContent = `W = ${round(v2 * v3, 2)} J`;
                else show("Ingrese dos valores para calcular el tercero.");
                break;
            case "Energía Cinética":
                if (v1 != null && v2 != null) result.textContent = `Ec = ${round(0.5 * v1 * v2 ** 2, 2)} J`;
                else if (v1 != null && v3 != null) result.textContent = `v = ${round(Math.sqrt(2 * v3 / v1), 2)} m/s`;
                else if (v2 != null && v3 != null) result.textContent = `m = ${round(2 * v3 / (v2 ** 2), 2)} kg`;
                else show("Ingrese dos valores.");
                break;
            case "Energía Potencial Gravitacional":
                if (v1 != null && v2 != null) result.textContent = `Ug = ${round(v1 * 9.8 * v2, 2)} J`;
                else if (v1 != null && v3 != null) result.textContent = `h = ${round(v3 / (v1 * 9.8), 2)} m`;
                else show("Ingrese los valores requeridos.");
                break;
            case "Energía Potencial Elástica":
                if (v1 != null && v2 != null) result.textContent = `Ue = ${round(0.5 * v1 * v2 ** 2, 2)} J`;
                else if (v1 != null && v3 != null) result.textContent = `x = ${round(Math.sqrt(2 * v3 / v1), 2)} m`;
                else if (v2 != null && v3 != null) result.textContent = `k = ${round(2 * v3 / v2 ** 2, 2)} N/m`;
                else show("Ingrese los valores necesarios.");
                break;
            case "Energía Mecánica":
                if (v1 != null && v2 != null) result.textContent = `Em = ${round(v1 + v2, 2)} J`;
                else if (v1 != null && v3 != null) result.textContent = `U = ${round(v3 - v1, 2)} J`;
                else if (v2 != null && v3 != null) result.textContent = `Ec = ${round(v3 - v2, 2)} J`;
                else show("Ingrese dos valores para calcular el tercero.");
                break;
        }
    }

    function clearInputs() {
        input1.value = "";
        input2.value = "";
        input3.value = "";
        input4.value = "";
        result.textContent = "";
    }

    updateLabels();
});
