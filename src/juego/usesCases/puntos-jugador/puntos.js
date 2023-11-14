const puntosHtml = document.querySelector('.puntos');
let contador = 0;
export const puntos = (ganador) => {
	ganador = ganador.toLowerCase();
	if (ganador === '¡ganaste!') {
		contador++;
	} else if (ganador === '¡perdiste!' && contador > 0) {
		contador--;
	}
	puntosHtml.textContent = contador;
};
