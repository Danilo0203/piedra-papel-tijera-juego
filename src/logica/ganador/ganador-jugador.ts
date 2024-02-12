import { elemtId } from "../click-items/id-items";

let puntos: number = 0;
export const ganadorJugador = (jugadores: string[], itemJugador: string, itemCasa: string) => {
  let [jugador, casa] = jugadores;
  let tableroPuntos = elemtId("puntos");
  let ganadorTexto = elemtId("ganador-texto");
  jugador = itemJugador;
  casa = itemCasa;
  if (jugador === casa) {
    ganadorTexto.innerText = "EMPATE";
  } else if (
    (jugador === "roca" && casa === "tijera") ||
    (jugador === "tijera" && casa === "papel") ||
    (jugador === "papel" && casa === "roca")
  ) {
    ++puntos;
    ganadorTexto.innerText = "GANASTE";
  } else {
    if (puntos > 0) {
      // Solo resta puntos si hay puntos para restar
      --puntos;
    }
    ganadorTexto.innerText = "PERDISTE";
  }
  // Mostrar los puntos asegurándose de que nunca sean negativos
  puntos = Math.max(puntos, 0);
  tableroPuntos.innerHTML = puntos.toString();
};
