function calculaRaizes(ax, bx, c) {
  let a = ax;
  let b = bx;
  let c1 = c;

  //   const bascara = ax ** 2 + bx + c1;
  const delta = b ** 2 - 4 * (a * c1);

  return console.log(`Delta é igual a ${delta}`);
}
calculaRaizes(5, 5, 1);
