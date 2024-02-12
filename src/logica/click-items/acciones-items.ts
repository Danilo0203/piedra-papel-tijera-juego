export const accionesItems = (metodo: string, clase: string, ...items: HTMLElement[]) => {
  items.forEach((item) => {
    if (metodo === "añadir") return item.classList.add(clase);
    if (metodo === "eliminar") return item.classList.remove(clase);
    if (metodo === "ocultar") return item.classList.add(clase);
  });
};
