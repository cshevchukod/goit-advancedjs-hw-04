/* empty css                      */import{a as d,S as f,i as a}from"./assets/vendor-BGqwtSVv.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m="56510220-94bf2d241d837d21bc9d081cd",g="https://pixabay.com/api/";function h(o){return d.get(g,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const r=o.map(({webformatURL:s,largeImageURL:n,tags:e,likes:t,views:i,comments:u,downloads:p})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img class="gallery-image" src="${s}" alt="${e}" />
          </a>
          <div class="image-info">
            <p><span>Likes</span>${t}</p>
            <p><span>Views</span>${i}</p>
            <p><span>Comments</span>${u}</p>
            <p><span>Downloads</span>${p}</p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",r),y.refresh()}function b(){c.innerHTML=""}function S(){l.classList.remove("is-hidden")}function q(){l.classList.add("is-hidden")}const P=document.querySelector(".form");P.addEventListener("submit",v);function v(o){o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();if(!r){a.error({message:"Please enter a search query.",position:"topRight"});return}b(),S(),h(r).then(s=>{if(s.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(s.hits)}).catch(()=>{a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{q()})}
//# sourceMappingURL=index.js.map
