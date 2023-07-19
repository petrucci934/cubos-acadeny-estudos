function calculaMontante(capital, periodo) {
  let c = capital ;
  let t = periodo ;
  const I = 0.125; // Taxa fixa
  const M = (c * (1 + I) ** t).toFixed(0);

  return console.log(M);
}
calculaMontante(1000, 5);
