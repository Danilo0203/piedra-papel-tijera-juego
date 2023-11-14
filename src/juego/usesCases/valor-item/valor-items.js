const contenedor = document.getElementById('box-items');
export const valorItem = () => {
	let item;
	contenedor.addEventListener('click', (e) => {
		const html = e.target.closest('.fondo');
		const img = html.querySelector('img');
		item = img.alt;
	});
};
