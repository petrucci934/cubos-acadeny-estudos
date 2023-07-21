function converteGraus(farenheigth) {
  const CONVERTE = ((farenheigth- 32) * (5 / 9)).toFixed(0);

  return console.log(`${CONVERTE}°C`);
}
converteGraus(73);

