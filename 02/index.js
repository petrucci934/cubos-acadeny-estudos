function converteGraus(farenheigth) {
  let f = farenheigth;
  const CONVERTE = ((f - 32) * (5 / 9)).toFixed(0);
  return console.log(`${CONVERTE}°C`);
}
converteGraus(73);
