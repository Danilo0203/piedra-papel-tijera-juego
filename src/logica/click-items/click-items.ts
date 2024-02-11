import { itemAleatorio } from "../item-aleatorio-casa/item-aleatorio";

export const clickItems = (items: string[]) => {
  const papel = <HTMLElement>document.getElementById("icono-papel");
  const tijera = <HTMLElement>document.getElementById("icono-tijera");
  const roca = <HTMLElement>document.getElementById("icono-roca");

  papel.addEventListener("click", () => {
    let itemCasa = itemAleatorio(items);
    
  });
};
