export function getImc(height, weight) {
  let imc = weight / (height / 100) ** 2;
  imc = imc.toFixed(1);
  return imc;
}
