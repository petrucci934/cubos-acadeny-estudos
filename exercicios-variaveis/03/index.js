function calculaDesconto(dinheiro,valorProduto) {

  const VALORDESCONTO = ((dinheiro / valorProduto) * 100).toFixed(1);

  return console.log(`${VALORDESCONTO}%`);
}
calculaDesconto(60,110)

