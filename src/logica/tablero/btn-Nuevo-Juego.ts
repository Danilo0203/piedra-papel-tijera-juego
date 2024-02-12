import { accionesItems } from "../click-items/acciones-items";
import { elemtId } from "../click-items/id-items";
import { reiniciar } from "./reiniciar";

export const btnNuevoJuego = (items: string[]) => {
  const btnNuevoJuego = <HTMLButtonElement>elemtId("reiniciar-tablero");
  const tablero = elemtId("tablero-juego");
  btnNuevoJuego.addEventListener("click", () => {
    tablero.innerHTML = "";
    reiniciar();
    const triangulo = elemtId("triangulo");
    const roca = elemtId("icono-roca");
    const tijera = elemtId("icono-tijera");
    const opcionCasa = elemtId("opcionCasa");
    const ganadorDerecho = elemtId("ganador-derecho");
    const ganadorIzquierdo = elemtId("ganador-izquierdo");
    const textoJugador = elemtId("texto-jugador");
    const textoCasa = elemtId("texto-casa");
    const mensaje = elemtId("mensaje-ganador");
    accionesItems("eliminar", "hidden", triangulo, roca, tijera);
    accionesItems("añadir", "hidden", opcionCasa);
    accionesItems("añadir", "juego-derecho", ganadorDerecho);
    accionesItems("eliminar", "ganador", ganadorDerecho);
    accionesItems("eliminar", "ganador", ganadorIzquierdo);
    accionesItems("añadir", "juego-izquierdo", ganadorIzquierdo);
    accionesItems("añadir", "text-transparent", textoJugador, textoCasa);
    accionesItems("añadir", "hidden", mensaje);
    accionesItems("eliminar", "flex", mensaje);
    items.forEach((item) => {
      let pick = <HTMLButtonElement>elemtId(`icono-${item}`);
      pick.disabled = false;
    });
  });
};
