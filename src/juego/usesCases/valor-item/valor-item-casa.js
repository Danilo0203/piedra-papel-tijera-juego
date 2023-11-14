export const itemCasa = (items) => {
	const numRandom = Math.floor(Math.random() * 3);
	return items[numRandom];
};
