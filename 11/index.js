function volumeEsfera(raio, diametro) {
  let d = diametro;
  let r = raio;
  const v = (4 / 3) * r ** 3;

  return console.log(`O volume da esfera é de: ${v} pi`);
}
volumeEsfera(3, 6);
