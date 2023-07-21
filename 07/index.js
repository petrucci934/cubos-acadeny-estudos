function calculaInfetados(populacao, transmissao, tempo) {
  const P = Math.pow(populacao * transmissao, tempo / tempo);
  return console.log(P);
}
calculaInfetados(1000, 4, 7);

