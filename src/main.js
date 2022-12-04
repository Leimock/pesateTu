import "../style.css";
import { getImc } from "./util";

document.getElementById("height").addEventListener("input", calculateImc);

document.getElementById("range").addEventListener("input", calculateImc);

export function calculateImc() {
  const height = document.getElementById("height").value;
  const range = document.getElementById("range").value;
  if (height >= 1 && height <= 180) {
    const imc = getImc(height, range);
    if (imc < 18.5)
      document.getElementById("resultado").innerHTML = imc + " (Peso Bajo)";
    else if (imc < 25)
      document.getElementById("resultado").innerHTML = imc + " (Normal)";
    else if (imc < 30)
      document.getElementById("resultado").innerHTML = imc + " (Sobrepeso)";
    else document.getElementById("resultado").innerHTML = imc + " (Obesidad)";
  } else {
    document.getElementById("resultado").innerHTML =
      "La altura debe estar entre 1cm y 180cm";
  }
}
