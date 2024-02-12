import { clickItems } from "./logica/click-items/click-items";
import { ganadorJugador } from "./logica/ganador/ganador-jugador";
import { ganadorTablero } from "./logica/ganador/ganador-tablero";
import { itemAleatorio } from "./logica/item-aleatorio-casa/item-aleatorio";
import "./modal/modal";

(() => {
  const items: string[] = ["roca", "papel", "tijera"];
  const jugadores: string[] = ["jugador", "casa"];
  let itemCasa = itemAleatorio(items);
  clickItems(items, (itemClick: string) => {
    setTimeout(() => {
      ganadorJugador(jugadores, itemClick, itemCasa, items);
    }, 1000);
    ganadorTablero(itemClick, itemCasa, items);
  });
})();
