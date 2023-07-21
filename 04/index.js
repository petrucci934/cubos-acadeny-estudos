function calculaMontante(capital, periodo) {
  const I = 0.125; // Taxa fixa
  const M = (capital * (1 + I) ** periodo).toFixed(0);

  return console.log(M);
}
calculaMontante(1000, 5);

