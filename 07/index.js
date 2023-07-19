function calculaInfetados(populacao, transmissao, tempo) {
  let p = populacao;
  let x = transmissao;
  let t = tempo;

  const P = (p * x )/t;
  return console.log(P);
}
calculaInfetados(1000, 4, 7);
