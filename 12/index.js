function calclulaTaxaJuros(montante, capital, parcelas) {
  let m = montante;
  let c = capital;
  let n = parcelas;
  let taxa = Math.pow(m / c, 1 / n) - 1;
  let res = (taxa * 100).toFixed(3);

  return console.log(`A taxa a ser paga é de: ${res}% ao mês`);
}
calclulaTaxaJuros(90000, 60000, 24);
