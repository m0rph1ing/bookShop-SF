(()=>{"use strict";var e,t,o,a,r={28:(e,t,o)=>{o.d(t,{E:()=>a});const a=document.querySelector(".book-list")},24:(e,t,o)=>{o.a(e,(async(e,t)=>{try{var a=o(840);const e=document.querySelectorAll(".books_categories__list-items");let r=e[0];r.classList.add("active"),await(0,a.Q)(r.dataset.category),e.forEach((t=>{t.addEventListener("click",(async()=>{t.classList.contains("active")||(e.forEach((e=>e.classList.remove("active"))),t.classList.add("active"),r=t,await(0,a.Q)(t.dataset.category))}))})),t()}catch(e){t(e)}}),1)},4:(e,t,o)=>{document.querySelector(".header-logo").addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}))},840:(e,t,o)=>{o.d(t,{Q:()=>n});var a=o(28),r=o(452);let s=0;const n=async e=>{s=0,a.E.innerHTML="",await(0,r.G)(e)}},752:(e,t,o)=>{o.d(t,{o:()=>a});const a=document.querySelector(".loadMore-btn")},88:(e,t,o)=>{o.a(e,(async(e,t)=>{try{var a=o(24),r=o(452),s=(o(760),o(4),o(752)),n=e([a]);a=(n.then?(await n)():n)[0];let c="architecture";s.o.currentCategory=c,(0,r.G)(),t()}catch(e){t(e)}}))},452:(e,t,o)=>{o.d(t,{G:()=>n});var a=o(28),r=o(752);document.querySelector(".book-buynow");let s=0;const n=async e=>{const t=await(async(e,t,o)=>{const a=await fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${e}"&key=AIzaSyDIT0om2d1UN9lnG7GiDuTiRneEU5Tvmv0&printType=books&startIndex=${t}&maxResults=6&langRestrict=en`);return(await a.json()).items})(e,s);t&&t.forEach((e=>{const t=document.createElement("div");t.classList.add("book-card");let o="No description available";e.volumeInfo.description&&(o=e.volumeInfo.description.length>100?e.volumeInfo.description.substring(0,100)+"...":e.volumeInfo.description);let r="Unknown author";e.volumeInfo.authors&&(r=e.volumeInfo.authors.join(", "));let s="";if(e.volumeInfo.averageRating){const t=e.volumeInfo.averageRating,o=e.volumeInfo.ratingsCount||0;for(let e=0;e<5;e++)s+=e<t?'<img src="../assets/stars/full-star.svg" alt="filled star">':'<img src="../assets/stars/empty-star.svg" alt="empty star">';s+=`${o} review`}else{for(let e=1;e<=5;e++)s+='<img src="../assets/stars/empty-star.svg" alt="empty star">';s+=" 0 reviews"}let n="Not available";e.saleInfo.retailPrice&&(n=e.saleInfo.retailPrice.amount+" "+e.saleInfo.retailPrice.currencyCode),t.innerHTML=`<div class="book_card-style">\n            <img src="${e.volumeInfo.imageLinks?e.volumeInfo.imageLinks.thumbnail:"placeholder.jpg"}" class="ff" alt="Book Cover">\n            <div class="book_card-components">\n            <p class="book-authors">${r}</p>\n            <p class="book-title">${e.volumeInfo.title}</p>\n            <p class="book-rating">${s}</p>\n            <p class="book-description">${o}</p>\n            <p class="book-price">${n}</p>\n            <button class="book-buynow" data-id="1">Buy now</button> \n            </div>\n            </div>\n            `,a.E.appendChild(t)})),buyBtns.forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.dataset.bookId;localStorage.getItem(t)?(localStorage.removeItem(t),e.target.textContent="Buy now",e.target.querySelector(".storage-icon").classList.add("empty")):(localStorage.setItem(t,"true"),e.target.textContent="Added to Cart",e.target.querySelector(".storage-icon").classList.remove("empty"))}))}))};r.o.addEventListener("click",(async()=>{s+=6,await n("")}))},760:(e,t,o)=>{const a=[{img:"../assets/bg/banner.png",dot:document.querySelector(".dot-one")},{img:"../assets/bg/banner2.png",dot:document.querySelector(".dot-two")},{img:"../assets/bg/banner3.png",dot:document.querySelector(".dot-three")}],r=document.querySelector(".slider"),s=document.querySelectorAll(".slider__btn-dot"),n=e=>{r.style.backgroundImage=`url(${a[e].img})`},c=e=>{a[e].dot.style.opacity=1},l=e=>{a[e].dot.style.opacity=.3};let i=0;s.forEach(((e,t)=>{e.addEventListener("click",(()=>{l(i),n(t),c(t),i=t}))}));for(let e=0;e<=a.length-1;e++)a[e].dot.addEventListener("click",(()=>{var t;t=e,l(i),i=t,n(i),c(i)}));let d=setInterval((()=>{l(i),i===a.length-1?i=0:i+=1,n(i),c(i)}),5e3);r.addEventListener("mouseover",(()=>{clearInterval(d)})),r.addEventListener("mouseout",(()=>{d=setInterval((()=>{l(i),i===a.length-1?i=0:i+=1,n(i),c(i)}),5e3)}))},512:(e,t,o)=>{o.a(e,(async(e,t)=>{try{var a=o(88),r=e([a]);a=(r.then?(await r)():r)[0],t()}catch(e){t(e)}}))}},s={};function n(e){var t=s[e];if(void 0!==t)return t.exports;var o=s[e]={exports:{}};return r[e](o,o.exports,n),o.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",a=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},n.a=(r,s,n)=>{var c;n&&((c=[]).d=-1);var l,i,d,u=new Set,m=r.exports,v=new Promise(((e,t)=>{d=t,i=e}));v[t]=m,v[e]=e=>(c&&e(c),u.forEach(e),v.catch((e=>{}))),r.exports=v,s((r=>{var s;l=(r=>r.map((r=>{if(null!==r&&"object"==typeof r){if(r[e])return r;if(r.then){var s=[];s.d=0,r.then((e=>{n[t]=e,a(s)}),(e=>{n[o]=e,a(s)}));var n={};return n[e]=e=>e(s),n}}var c={};return c[e]=e=>{},c[t]=r,c})))(r);var n=()=>l.map((e=>{if(e[o])throw e[o];return e[t]})),i=new Promise((t=>{(s=()=>t(n)).r=0;var o=e=>e!==c&&!u.has(e)&&(u.add(e),e&&!e.d&&(s.r++,e.push(s)));l.map((t=>t[e](o)))}));return s.r?i:n()}),(e=>(e?d(v[o]=e):i(m),a(c)))),c&&c.d<0&&(c.d=0)},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(512)})();