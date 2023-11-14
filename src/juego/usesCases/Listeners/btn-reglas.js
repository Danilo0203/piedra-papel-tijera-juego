import { getJuegoTerminado } from '../..';
const btnReglas = document.getElementById('btn-reglas');
const contenedorReglas = document.querySelector('.reglas');
const btnCerrar = document.querySelector('.btn-cerrar');
const modalRules = document.getElementById('rules');
const juego = document.querySelector('.juego');
const jugarOtraVez = document.querySelector('.ganador');
const atribucion = document.querySelector('.atribucion');

btnReglas.addEventListener('click', () => {
	modalRules.classList.remove('hidden');
	contenedorReglas.classList.add('hidden');
	juego.classList.add('opacidad');
	atribucion.classList.add('hidden');
	jugarOtraVez.classList.add('hidden');
});

btnCerrar.addEventListener('click', () => {
	modalRules.classList.add('hidden');
	juego.classList.remove('opacidad');
	contenedorReglas.classList.remove('hidden');
	atribucion.classList.remove('hidden');
	if (getJuegoTerminado()) {
		jugarOtraVez.classList.remove('hidden');
	} else {
		jugarOtraVez.classList.add('hidden');
	}
});
