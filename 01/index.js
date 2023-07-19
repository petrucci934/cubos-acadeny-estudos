function calculaImc(peso,altura) {
  let p = peso;
  let a = altura;
  const I = (p / a ** 2).toFixed(1);
  return console.log(`O seu IMC é ${I}`);
}
calculaImc(76,1.79);
