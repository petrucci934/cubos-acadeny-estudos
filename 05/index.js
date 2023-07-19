function calculaDistancia(x2, x1, y2, y1) {
  let x = x2 - x1;
  let y = y2 - y1;
  let res = Math.sqrt(x ** 2 + y ** 2);
  return console.log(res);
}
calculaDistancia(1, 1, 4, 1);
