import { btnJuegoNuevo } from './usesCases/Listeners/btn-jugo-nuevo';
import { ganador } from './usesCases/Listeners/ganador';
import { itemSelect } from './usesCases/Listeners/item-select';
import { esperarRespuestaCasa } from './usesCases/crear-items/esperar-Respuesta-Casa';
import { plantillaHTML } from './usesCases/crear-items/plantilla-items';
import { plantillaSeleccionadoHTML } from './usesCases/crear-items/plantilla-seleccionado';
import { puntos } from './usesCases/puntos-jugador/puntos';
import { itemCasa } from './usesCases/valor-item/valor-item-casa';
import './usesCases/Listeners/btn-reglas';
let juegoTerminado = false;
export function setJuegoTerminado(estado) {
	juegoTerminado = estado;
}
export function getJuegoTerminado() {
	return juegoTerminado;
}
(() => {
	const items = ['piedra', 'tijera', 'papel'];
	let ganadorPuntos;
	plantillaHTML(items);
	itemSelect((item) => {
		const casa = itemCasa(items);
		plantillaSeleccionadoHTML(item, casa);
		esperarRespuestaCasa(casa);
		setTimeout(() => {
			ganadorPuntos = ganador(item, casa);
			puntos(ganadorPuntos);
			juegoTerminado = true;
		}, 500);
	});
	btnJuegoNuevo(items);
})();
