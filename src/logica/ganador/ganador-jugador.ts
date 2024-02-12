import { elemtId } from "../click-items/id-items";

export const ganadorJugador = (jugadores: string[], itemJugador: string, itemCasa: string, items: string[]) => {
  let [jugador, casa] = jugadores;
  let tableroPuntos = elemtId("puntos");
  let ganadorTexto = elemtId("ganador-texto");
  jugador = itemJugador;
  casa = itemCasa;
  let puntos: any = 0;
  if (jugador === casa) return (ganadorTexto.innerText = "EMPATE");

  if (
    (jugador === "roca" && casa === "tijera") ||
    (jugador === "tijera" && casa === "papel") ||
    (jugador === "papel" && casa === "roca")
  ) {
    ++puntos;
    tableroPuntos.innerHTML = puntos;
    ganadorTexto.innerText = "GANASTE";
  } else {
    --puntos;
    ganadorTexto.innerText = "PERDISTE";

    if (puntos < 0) return;
    tableroPuntos.innerHTML = puntos;
  }
};
