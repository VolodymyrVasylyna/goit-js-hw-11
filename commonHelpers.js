import{i as p,S as u}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d=document.getElementById("search-form"),i=document.getElementById("gallery"),l=document.querySelector(".loader"),c={key:"42334155-d8ef6d202703fa7fdc7903459",image_type:"photo",orientation:"horizontal",safesearch:!0,q:""};d.addEventListener("submit",function(o){o.preventDefault(),l.style.display="block";const s=o.target.elements.input.value;c.q=s,f().then(n=>g(n)).catch(n=>console.log(n)),o.target.reset()});function f(){const o=new URLSearchParams(c);return fetch(`https://pixabay.com/api/?${o}`).then(s=>{if(s.ok)return s.json();throw new Error(s.status)})}function g(o){if(o.hits.length===0)p.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#EF4040",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"}),i.innerHTML="";else{const n=o.hits.map(r=>`<a class="gallery-link" href="${r.largeImageURL}">
        <img class="gallery-image"
        src="${r.webformatURL}"
        alt="${r.tags}"
         </a>
         <div class="image-info">
          <p ><strong>Likes:</strong> <span class="text">${r.likes}</span></p>
          <p ><strong>Views:</strong> <span class="text">${r.views}</span></p>
          <p ><strong>Comments:</strong> <span class="text">${r.comments}</span></p>
          <p ><strong>Downloads:</strong> <span class="text">${r.downloads}</span></p>
          </div>
          
        `).join("");i.innerHTML=n}new u(".gallery-link").refresh(),l.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
