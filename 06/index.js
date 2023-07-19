function calculaVelocidadeMedia(distancia, tempo) {
  let d = distancia;
  let t = tempo;
  let velocidadeMedia = (d / t) * 3.6;

  return console.log(`${velocidadeMedia}km/h`);
}
calculaVelocidadeMedia(500, 10);
