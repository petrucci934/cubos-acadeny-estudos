function somaAngulosInternos(lados) {

  const S = 180 * (lados - 2);
  let a = S / lados;

  return console.log(`A soma dos ângulos internos é de ${S}º e o valor de cada ângulo é de :${a}º
  `);
}
somaAngulosInternos(6);

