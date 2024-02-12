import { elemtId } from "../click-items/id-items";

let puntos: any = 0;
export const ganadorJugador = (jugadores: string[], itemJugador: string, itemCasa: string) => {
  let [jugador, casa] = jugadores;
  let tableroPuntos = elemtId("puntos");
  let ganadorTexto = elemtId("ganador-texto");
  jugador = itemJugador;
  casa = itemCasa;
  if (jugador === casa) return (ganadorTexto.innerText = "EMPATE");

  if (
    (jugador === "roca" && casa === "tijera") ||
    (jugador === "tijera" && casa === "papel") ||
    (jugador === "papel" && casa === "roca")
  ) {
    ++puntos;
    ganadorTexto.innerText = "GANASTE";
  } else {
    --puntos;
    if (puntos < 0) return;
    ganadorTexto.innerText = "PERDISTE";
  }
  tableroPuntos.innerHTML = puntos;
};
