const conetenedorPadre = document.querySelector('.box-1');
const contenedorSeleccionado = document.querySelector('.box-2');
const contenedor = document.getElementById('box-items');
export const itemSelect = (callback) => {
	contenedor.addEventListener('click', (e) => {
		const html = e.target.closest('.fondo');
		const img = html.querySelector('img');
		const item = img.alt;
		if (item) {
			conetenedorPadre.classList.add('hidden');
			contenedorSeleccionado.classList.remove('hidden');
			// Llamas a la función callback con el valor de 'item'
			callback(item);
		}
	});
};
