(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(o){if(o.ep)return;o.ep=!0;const c=s(o);fetch(o.href,c)}})();const L=document.getElementById("box-items"),l=t=>{t.forEach(e=>{for(let s=0;s<1;s++){const n=`
            <div id="${e}">
                <div class="fondo fondo-${e}">
                    <img src="assets/img/icon-${e}.svg" alt="${e}" class="img-item">
                </div>
            </div>`;L.insertAdjacentHTML("beforeend",n)}})},p=document.querySelector(".ganador button"),v=document.querySelector(".box-1"),y=document.querySelector(".box-2"),h=document.querySelector(".ganador"),b=t=>{p.addEventListener("click",()=>{v.classList.remove("hidden"),y.classList.add("hidden"),h.classList.add("hidden"),l(t)})},S=document.getElementById("btn-reglas"),u=document.querySelector(".reglas"),$=document.querySelector(".btn-cerrar"),m=document.getElementById("rules"),g=document.querySelector(".juego"),f=document.querySelector(".ganador");S.addEventListener("click",()=>{m.classList.remove("hidden"),u.classList.add("hidden"),g.classList.add("opacidad"),f.classList.add("hidden")});$.addEventListener("click",()=>{m.classList.add("hidden"),g.classList.remove("opacidad"),u.classList.remove("hidden"),f.classList.remove("hidden")});const i=document.querySelector(".ganador"),d=document.querySelector(".ganador h2"),x=(t,e)=>(t=t.toLowerCase(),e=e.toLowerCase(),t===e?(i.classList.remove("hidden"),d.textContent="¡Empate!"):t==="papel"&&e==="piedra"||t==="piedra"&&e==="tijera"||t==="tijera"&&e==="papel"?(i.classList.remove("hidden"),d.textContent="¡Ganaste!"):(i.classList.remove("hidden"),d.textContent="¡Perdiste!"),d.textContent),q=document.querySelector(".box-1"),E=document.querySelector(".box-2"),H=document.getElementById("box-items"),j=t=>{H.addEventListener("click",e=>{const o=e.target.closest(".fondo").querySelector("img").alt;o&&(q.classList.add("hidden"),E.classList.remove("hidden"),t(o))})},M=t=>{const e=document.querySelector("#box-item-casa .item-select .fondo"),s=document.querySelector("#box-item-casa .item-select .textoCasa");console.log(s),e.classList.remove("fondo"),e.classList.remove(`fondo-${t}`),e.classList.add("espacio"),s.innerHTML="Pensando...",setTimeout(()=>{s.innerHTML=`La casa <b>${t}</b>`,e.classList.add("fondo"),e.classList.add(`fondo-${t}`),e.classList.remove("espacio")},500)},C=document.getElementById("box-item-select"),P=document.getElementById("box-item-casa"),T=(t,e)=>{const s=`
            <div class="item-select">
              <div class="fondo fondo-${t}">
                <img src="assets/img/icon-${t}.svg" alt="${t}" class="img-item">
              </div>
              <p>Escogiste <b>${t}</b></p>
            </div>`,n=`
            <div class="item-select">
            <div class="fondo fondo-${e}">
            <img src="assets/img/icon-${e}.svg" alt="${e}" class="img-item">
            </div>
            <p class="textoCasa">La casa <b>${e}</b></p>
            </div>`;C.innerHTML=s,P.innerHTML=n},O=document.querySelector(".puntos");let r=0;const I=t=>{t=t.toLowerCase(),t==="¡ganaste!"?r++:t==="¡perdiste!"&&r>0&&r--,O.textContent=r},B=t=>{const e=Math.floor(Math.random()*3);return t[e]};(()=>{const t=["piedra","tijera","papel"];let e;l(t),j(s=>{const n=B(t);T(s,n),M(n),setTimeout(()=>{e=x(s,n),I(e)},500)}),b(t)})();
