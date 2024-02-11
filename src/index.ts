import { clickItems } from "./logica/click-items/click-items";
import "./modal/modal";

(() => {
  const items: string[] = ["piedra", "papel", "tijera"];
  clickItems(items);
})();
