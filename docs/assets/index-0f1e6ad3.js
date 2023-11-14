(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(o){if(o.ep)return;o.ep=!0;const c=s(o);fetch(o.href,c)}})();const v=document.getElementById("box-items"),m=e=>{let t="";t+=`
    <div id="triangulo">
      <img src="assets/img/bg-triangle.svg" alt="triangulo">
    </div>
  `,e.forEach(s=>{for(let n=0;n<1;n++)t+=`
            <div id="${s}">
                <div class="fondo fondo-${s}">
                    <img src="assets/img/icon-${s}.svg" alt="${s}" class="img-item">
                </div>
            </div>`}),v.insertAdjacentHTML("beforeend",t)},y=document.querySelector(".ganador button"),b=document.querySelector(".box-1"),h=document.querySelector(".box-2"),S=document.querySelector(".ganador"),$=document.getElementById("box-items"),x=e=>{y.addEventListener("click",()=>{b.classList.remove("hidden"),h.classList.add("hidden"),S.classList.add("hidden"),$.innerHTML="",m(e),N(!1)})},a=document.querySelector(".ganador"),d=document.querySelector(".ganador h2"),q=(e,t)=>(e=e.toLowerCase(),t=t.toLowerCase(),e===t?(a.classList.remove("hidden"),d.textContent="¡Empate!"):e==="papel"&&t==="piedra"||e==="piedra"&&t==="tijera"||e==="tijera"&&t==="papel"?(a.classList.remove("hidden"),d.textContent="¡Ganaste!"):(a.classList.remove("hidden"),d.textContent="¡Perdiste!"),d.textContent),E=document.querySelector(".box-1"),H=document.querySelector(".box-2"),T=document.getElementById("box-items"),j=e=>{T.addEventListener("click",t=>{const o=t.target.closest(".fondo").querySelector("img").alt;o&&(E.classList.add("hidden"),H.classList.remove("hidden"),e(o))})},M=e=>{const t=document.querySelector("#box-item-casa .item-select .fondo"),s=document.querySelector("#box-item-casa .item-select .textoCasa");t.classList.remove("fondo"),t.classList.remove(`fondo-${e}`),t.classList.add("espacio"),s.innerHTML="Pensando...",setTimeout(()=>{s.innerHTML=`La casa <b>${e}</b>`,t.classList.add("fondo"),t.classList.add(`fondo-${e}`),t.classList.remove("espacio")},500)},C=document.getElementById("box-item-select"),P=document.getElementById("box-item-casa"),I=(e,t)=>{const s=`
            <div class="item-select">
              <div class="fondo fondo-${e}">
                <img src="assets/img/icon-${e}.svg" alt="${e}" class="img-item">
              </div>
              <p>Escogiste <b>${e}</b></p>
            </div>`,n=`
            <div class="item-select">
            <div class="fondo fondo-${t}">
            <img src="assets/img/icon-${t}.svg" alt="${t}" class="img-item">
            </div>
            <p class="textoCasa">La casa <b>${t}</b></p>
            </div>`;C.innerHTML=s,P.innerHTML=n},O=document.querySelector(".puntos");let r=0;const B=e=>{e=e.toLowerCase(),e==="¡ganaste!"?r++:e==="¡perdiste!"&&r>0&&r--,O.textContent=r},R=e=>{const t=Math.floor(Math.random()*3);return e[t]},w=document.getElementById("btn-reglas"),g=document.querySelector(".reglas"),J=document.querySelector(".btn-cerrar"),f=document.getElementById("rules"),L=document.querySelector(".juego"),l=document.querySelector(".ganador"),p=document.querySelector(".atribucion");w.addEventListener("click",()=>{f.classList.remove("hidden"),g.classList.add("hidden"),L.classList.add("opacidad"),p.classList.add("hidden"),l.classList.add("hidden")});J.addEventListener("click",()=>{f.classList.add("hidden"),L.classList.remove("opacidad"),g.classList.remove("hidden"),p.classList.remove("hidden"),z()?l.classList.remove("hidden"):l.classList.add("hidden")});let u=!1;function N(e){u=e}function z(){return u}(()=>{const e=["piedra","tijera","papel"];let t;m(e),j(s=>{const n=R(e);I(s,n),M(n),setTimeout(()=>{t=q(s,n),B(t),u=!0},500)}),x(e)})();
