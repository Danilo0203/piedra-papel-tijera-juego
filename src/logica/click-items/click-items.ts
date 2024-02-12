import { itemAleatorio } from "../item-aleatorio-casa/item-aleatorio";
import { elemtId } from "./id-items";
import { ocultarItems } from "./ocultar-items";

export const clickItems = (items: string[], callback: (itemClick: string) => void) => {
  // let itemCasa = itemAleatorio(items);
  items.forEach((item) => {
    elemtId(`icono-${item}`).addEventListener("click", () => {
      ocultarItems(items);
      callback(item);
    });
  });
};
