import { btnNuevoJuego } from "../tablero/btn-Nuevo-Juego";
import { accionesItems } from "./acciones-items";
import { elemtId } from "./id-items";

export const ocultarItems = (items: string[]) => {
  const triangulo = elemtId("triangulo");
  const roca = elemtId("icono-roca");
  const tijera = elemtId("icono-tijera");
  const opcionCasa = elemtId("opcionCasa");
  const ganadorDerecho = elemtId("ganador-derecho");
  const ganadorIzquierdo = elemtId("ganador-izquierdo");
  const textoJugador = elemtId("texto-jugador");
  const textoCasa = elemtId("texto-casa");
  const mensaje = elemtId("mensaje-ganador");
  accionesItems("ocultar", "hidden", triangulo, roca, tijera);
  accionesItems("eliminar", "hidden", opcionCasa);
  accionesItems("eliminar", "juego-derecho", ganadorDerecho);
  accionesItems("añadir", "ganador", ganadorDerecho);
  accionesItems("añadir", "ganador", ganadorIzquierdo);
  accionesItems("eliminar", "juego-izquierdo", ganadorIzquierdo);
  accionesItems("eliminar", "text-transparent", textoJugador, textoCasa);
  setTimeout(() => {
    accionesItems("añadir", "ganador", ganadorIzquierdo);
    accionesItems("eliminar", "hidden", tijera);
    accionesItems("añadir", "hidden", opcionCasa);
    accionesItems("eliminar", "hidden", mensaje);
    accionesItems("añadir", "flex", mensaje);
    btnNuevoJuego(items);
  }, 1000);
  items.forEach((item) => {
    let pick = <HTMLButtonElement>elemtId(`icono-${item}`);
    pick.disabled = true;
  });
};
