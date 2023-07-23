const jogada1 = "pedra";
const jogada2 = "tesoura";

//seu código aqui
if (jogada1 === jogada2) {
  console.log("Empate!!");
}
if (
  (jogada1 === "papel" && jogada2 === "pedra") ||
  (jogada1 === "pedra" && jogada2 === "tesoura") ||
  (jogada1 === "tesoura" && jogada2 === "papel")
) {
  console.log(`O jogador 1 ${jogada1}  Venceu!!`);
} else console.log(`O jogador 2 ${jogada2} Venceu!!`);
