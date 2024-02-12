export const tableroRender = (elemet: HTMLElement) => {
  let html = `<!-- Imagen de fondo Triangulo -->
  <!--! Agregar  hidden -->
  <img src="assets/img/bg-triangle.svg" alt="triangulo-fondo" class="w-[80%] sm:w-11/12 lg:w-[40%]" id="triangulo" />
  
  <!-- Poner la clase ganador para mostrar el ganador en pantalla lg -->
  <!-- Poner la clase juego-derecho para eligir un item -->
  <div
    class="juego-derecho absolute left-0 z-10 -translate-y-1/3 text-center text-white sm:-translate-y-1/2"
    id="ganador-derecho"
  >
    <!-- Icono de Papel -->
    <button
      id="icono-papel"
      class="internoPapel flex h-32 w-32 cursor-pointer items-center justify-center rounded-full border-[1em] border-gradientePapel2 bg-white bg-gradient-to-t from-gray-50 to-gray-100 p-5 hover:animate-pop sm:h-56 sm:w-56 sm:border-[2em] lg:h-40 lg:w-40 lg:border-[1em]"
    >
      <img src="assets/img/icon-papel.svg" alt="icon-papel" class="w-10 sm:w-16" id="img-papel" />
    </button>
    <!-- ! agregar text-transparent -->
    <p class="pt-7 tracking-widest text-transparent sm:text-2xl lg:pb-7 lg:pt-0 lg:text-xl" id="texto-jugador">ELEGISTE</p>
  </div>
  
  <!-- Poner la clase ganador para mostrar el ganador en pantalla lg -->
  <!-- Poner la clase juego-izquierdo para eligir un item -->
  <div
    class="juego-izquierdo absolute right-0 z-10 -translate-y-1/3 text-center text-white sm:-translate-y-1/2"
    id="ganador-izquierdo"
  >
    <!-- Icono de casa -->
    <!--! Agregar el flex y quitar hidden -->
    <button class="hidden h-32 w-32 rounded-full bg-[#1b2947] sm:h-56 sm:w-56 lg:h-40 lg:w-40" id="opcionCasa"></button>
    <!-- Icono de Tijera -->
    <!--! Agregar el flex y quitar hidden -->
    <button
      id="icono-tijera"
      class="internoTijera flex h-32 w-32 cursor-pointer items-center justify-center rounded-full border-[1em] border-gradienteTijera2 bg-white bg-gradient-to-t from-gray-50 to-gray-100 p-5 hover:animate-pop sm:h-56 sm:w-56 sm:border-[2em] lg:h-40 lg:w-40 lg:border-[1em]"
    >
      <img src="assets/img/icon-tijera.svg" alt="icon-tijeras" class="w-10 sm:w-16" id="img-tijera" />
    </button>
    <!-- ! Quitar text-transparent -->
    <p class="w-full pt-7 tracking-widest text-transparent sm:text-2xl lg:pb-7 lg:pt-0 lg:text-xl" id="texto-casa">
      LA CASA ELIGIO
    </p>
  </div>
  
  <!-- Icono de roca -->
  <!-- ! Agregar hidden -->
  <div class="absolute bottom-2/4 translate-y-[100%] text-center">
    <button
      id="icono-roca"
      class="internoRoca flex h-32 w-32 cursor-pointer items-center justify-center rounded-full border-[1em] border-gradienteRoca2 bg-white bg-gradient-to-t from-gray-50 to-gray-100 p-5 hover:animate-pop sm:h-56 sm:w-56 sm:border-[2em] lg:h-40 lg:w-40 lg:border-[1em]"
    >
      <img src="assets/img/icon-roca.svg" alt="icon-roca" class="w-10 sm:w-16" />
    </button>
  </div>
  <!-- Ganador o Empate -->
        <!--! Poner flex para mostrar y quitar hidden -->
        <section
          class="absolute hidden w-full translate-y-[90%] flex-col items-center gap-5 tracking-widest text-white lg:translate-y-0"
          id="mensaje-ganador"
        >
          <h1 class="text-6xl sm:text-8xl lg:text-5xl" id="ganador-texto">EMPATE</h1>
          <button
            class="cursor-pointer rounded-lg border-[1.5px] border-white bg-white px-10 py-2 tracking-widest text-gradienteFondo hover:animate-pop hover:text-red-700 sm:px-12 sm:py-4 sm:text-3xl lg:text-xl"
            id="reiniciar-tablero"
          >
            JUGAR OTRA VEZ
          </button>
        </section>
  `;
  elemet.insertAdjacentHTML("beforeend", html);
};
