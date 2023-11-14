import { btnJuegoNuevo } from './usesCases/Listeners/btn-jugo-nuevo';
import './usesCases/Listeners/btn-reglas';
import { ganador } from './usesCases/Listeners/ganador';
import { itemSelect } from './usesCases/Listeners/item-select';
import { esperarRespuestaCasa } from './usesCases/crear-items/esperar-Respuesta-Casa';
import { plantillaHTML } from './usesCases/crear-items/plantilla-items';
import { plantillaSeleccionadoHTML } from './usesCases/crear-items/plantilla-seleccionado';
import { puntos } from './usesCases/puntos-jugador/puntos';
import { itemCasa } from './usesCases/valor-item/valor-item-casa';
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
		}, 500);
	});
	btnJuegoNuevo(items);
})();
