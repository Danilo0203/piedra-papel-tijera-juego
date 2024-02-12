import { elemtId } from "./id-items";
import { ocultarItems } from "./ocultar-items";

export const clickItems = (items: string[], callback: (itemClick: string) => void) => {
  items.forEach((item) => {
    elemtId(`icono-${item}`).addEventListener("click", () => {
      ocultarItems(items);
      callback(item);
    });
  });
};
