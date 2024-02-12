import { clickItems } from "../click-items/click-items";
import { elemtId } from "../click-items/id-items";
import { ganadorJugador } from "../ganador/ganador-jugador";
import { ganadorTablero } from "../ganador/ganador-tablero";
import { itemAleatorio } from "../item-aleatorio-casa/item-aleatorio";
import { tableroRender } from "./tablero-render";

export const reiniciar = () => {
  const items: string[] = ["roca", "papel", "tijera"];
  const jugadores: string[] = ["jugador", "casa"];
  const tablero = elemtId("tablero-juego");
  let itemCasa = itemAleatorio(items);
  console.log(`reiniciar: ${itemCasa}`);
  tableroRender(tablero);
  clickItems(items, (itemClick: string) => {
    setTimeout(() => {
      ganadorJugador(jugadores, itemClick, itemCasa);
    }, 1000);
    ganadorTablero(itemClick, itemCasa, items);
  });
};
