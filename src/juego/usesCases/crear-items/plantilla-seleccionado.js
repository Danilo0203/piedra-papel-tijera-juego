const jugador = document.getElementById('box-item-select');
const casa = document.getElementById('box-item-casa');
export const plantillaSeleccionadoHTML = (item, itemCasa) => {
	const jugadorHtml = `
            <div class="item-select">
              <div class="fondo fondo-${item}">
                <img src="assets/img/icon-${item}.svg" alt="${item}" class="img-item">
              </div>
              <p>Escogiste <b>${item}</b></p>
            </div>`;
	const jugadorCasa = `
            <div class="item-select">
            <div class="fondo fondo-${itemCasa}">
            <img src="assets/img/icon-${itemCasa}.svg" alt="${itemCasa}" class="img-item">
            </div>
            <p class="textoCasa">La casa <b>${itemCasa}</b></p>
            </div>`;
	jugador.innerHTML = jugadorHtml;
	casa.innerHTML = jugadorCasa;
};
