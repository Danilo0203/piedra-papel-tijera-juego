export const itemAleatorio = (items: string[]) => {
  const itemRandom: number = Math.floor(Math.random() * items.length);
  const buscarItems: string[] = items.filter((item, index) => {
    if (index === itemRandom) return item;
  });
  return buscarItems.toString();
};
