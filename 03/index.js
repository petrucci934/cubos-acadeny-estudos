function calculaDesconto(dinheiro,valorProduto) {
  let d = dinheiro  ;
  let p = valorProduto ;
  const VALORDESCONTO = ((d / p) * 100).toFixed(1);

  return console.log(`${VALORDESCONTO}%`);
}
calculaDesconto(60,110)
