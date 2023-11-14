import { setJuegoTerminado } from '../..';
import { plantillaHTML } from '../crear-items/plantilla-items';
const btnJugarOtraVez = document.querySelector('.ganador button');
const conetenedorPadre = document.querySelector('.box-1');
const contenedorSeleccionado = document.querySelector('.box-2');
const ganadorHtml = document.querySelector('.ganador');
export const btnJuegoNuevo = (items) => {
	btnJugarOtraVez.addEventListener('click', () => {
		conetenedorPadre.classList.remove('hidden');
		contenedorSeleccionado.classList.add('hidden');
		ganadorHtml.classList.add('hidden');
		plantillaHTML(items);
		setJuegoTerminado(false);
	});
};
