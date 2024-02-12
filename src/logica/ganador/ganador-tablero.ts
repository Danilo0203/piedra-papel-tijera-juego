import { accionesItems } from "../click-items/acciones-items";
import { elemtId } from "../click-items/id-items";

export const ganadorTablero = (itemJugador: string, itemCasa: string, items: string[]) => {
  let itemIzquiero = elemtId("icono-papel");
  let itemDerecho = elemtId("icono-tijera");
  let imgPapel = <HTMLImageElement>elemtId("img-papel");
  let imgTijera = <HTMLImageElement>elemtId("img-tijera");

  items.forEach((item) => {
    if (itemJugador === item) {
      accionesItems("eliminar", `internoPapel`, itemIzquiero);
      accionesItems("eliminar", `border-gradientePapel2`, itemIzquiero);
      accionesItems(
        "añadir",
        `interno${item.replace(item, itemJugador.charAt(0).toUpperCase() + itemJugador.slice(1))}`,
        itemIzquiero,
      );
      accionesItems(
        "añadir",
        `border-gradiente${item.replace(item, itemJugador.charAt(0).toUpperCase() + itemJugador.slice(1))}2`,
        itemIzquiero,
      );
      imgPapel.src = `assets/img/icon-${item.replace(item, itemJugador)}.svg`;
    }
    if (itemCasa === item) {
      accionesItems("eliminar", `internoTijera`, itemDerecho);
      accionesItems("eliminar", `border-gradienteTijera2`, itemDerecho);
      accionesItems(
        "añadir",
        `interno${item.replace(item, itemCasa.charAt(0).toUpperCase() + itemCasa.slice(1))}`,
        itemDerecho,
      );
      accionesItems(
        "añadir",
        `border-gradiente${item.replace(item, itemCasa.charAt(0).toUpperCase() + itemCasa.slice(1))}2`,
        itemDerecho,
      );
      imgTijera.src = `assets/img/icon-${item.replace(item, itemCasa)}.svg`;
    }
  });
};
