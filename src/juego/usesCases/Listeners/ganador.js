const ganadorHtml = document.querySelector('.ganador');
const mensajeHtml = document.querySelector('.ganador h2');
export const ganador = (item, casa) => {
	item = item.toLowerCase();
	casa = casa.toLowerCase();
	if (item === casa) {
		ganadorHtml.classList.remove('hidden');
		mensajeHtml.textContent = '¡Empate!';
	} else if ((item === 'papel' && casa === 'piedra') || (item === 'piedra' && casa === 'tijera') || (item === 'tijera' && casa === 'papel')) {
		ganadorHtml.classList.remove('hidden');
		mensajeHtml.textContent = '¡Ganaste!';
	} else {
		ganadorHtml.classList.remove('hidden');
		mensajeHtml.textContent = '¡Perdiste!';
	}
	return mensajeHtml.textContent;
};
