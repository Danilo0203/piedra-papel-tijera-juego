export const esperarRespuestaCasa = (itemCasa) => {
	const fondo = document.querySelector('#box-item-casa .item-select .fondo');
	const texto = document.querySelector('#box-item-casa .item-select .textoCasa');
	fondo.classList.remove('fondo');
	fondo.classList.remove(`fondo-${itemCasa}`);
	fondo.classList.add('espacio');
    texto.innerHTML='Pensando...'
	setTimeout(() => {
        texto.innerHTML = `La casa <b>${itemCasa}</b>`;
		fondo.classList.add('fondo');
		fondo.classList.add(`fondo-${itemCasa}`);
		fondo.classList.remove('espacio');
	}, 500);
};
