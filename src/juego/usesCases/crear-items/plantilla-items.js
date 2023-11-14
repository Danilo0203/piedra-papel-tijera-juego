const contenedor = document.getElementById('box-items');
export const plantillaHTML = (items) => {
	let html = '';
	html += `
    <div id="triangulo">
      <img src="assets/img/bg-triangle.svg" alt="triangulo">
    </div>
  `;
	items.forEach((item) => {
		for (let i = 0; i < 1; i++) {
			html += `
            <div id="${item}">
                <div class="fondo fondo-${item}">
                    <img src="assets/img/icon-${item}.svg" alt="${item}" class="img-item">
                </div>
            </div>`;
		}
	});
	contenedor.insertAdjacentHTML('beforeend', html);
};
