function calculaComprimento(raio) {
  const PI = 3.14;
  let r = raio;
  let c = 2 * (PI * r);
  let area = PI * r ** 2;
  console.log(`A área é de : ${area}`);
  console.log(`O comprimento é de: ${c}`);
}
calculaComprimento(1);
