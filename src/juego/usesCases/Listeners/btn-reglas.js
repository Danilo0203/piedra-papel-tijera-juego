const btnReglas = document.getElementById('btn-reglas');
const contenedorReglas = document.querySelector('.reglas');
const btnCerrar = document.querySelector('.btn-cerrar');
const modalRules = document.getElementById('rules');
const juego = document.querySelector('.juego');
btnReglas.addEventListener('click', () => {
	modalRules.classList.remove('hidden');
	contenedorReglas.classList.add('hidden');
	juego.classList.add('opacidad');
});
btnCerrar.addEventListener('click', () => {
	modalRules.classList.add('hidden');
	juego.classList.remove('opacidad');
	contenedorReglas.classList.remove('hidden');
});
