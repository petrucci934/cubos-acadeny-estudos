function calculaComprimento(raio) {
  const PI = 3.14;

  let circunferencia = 2 * (PI * raio);
  let area = PI * raio ** 2;
  console.log(`A área é de : ${area}`);
  console.log(`O comprimento é de: ${circunferencia}`);
}
calculaComprimento(1);

