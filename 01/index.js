function calculaImc(peso, altura) {
  const I = (peso /altura ** 2).toFixed(1);

  return console.log(`O seu IMC é ${I}`);
}
calculaImc(76, 1.79);
