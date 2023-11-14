const btnReglas = document.getElementById('btn-reglas');
const contenedorReglas = document.querySelector('.reglas');
const btnCerrar = document.querySelector('.btn-cerrar');
const modalRules = document.getElementById('rules');
const juego = document.querySelector('.juego');
const jugarOtravez = document.querySelector('.ganador');
btnReglas.addEventListener('click', () => {
	modalRules.classList.remove('hidden');
	contenedorReglas.classList.add('hidden');
	juego.classList.add('opacidad');
	jugarOtravez.classList.add('hidden');
});
btnCerrar.addEventListener('click', () => {
	modalRules.classList.add('hidden');
	juego.classList.remove('opacidad');
	contenedorReglas.classList.remove('hidden');
	jugarOtravez.classList.remove('hidden');
});
