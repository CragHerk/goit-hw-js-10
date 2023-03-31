const n=async n=>{const e=`https://restcountries.com/v3/name/${n}?fields=name,capital,population,flags,languages`;try{const n=await fetch(e);if(!n.ok)return Promise.reject(new Error(n.status));return await n.json()}catch(n){return console.error(n),Promise.reject(new Error("An error occurred while fetching the data."))}},e=document.getElementById("search-box"),t=document.querySelector(".country-list"),i=document.querySelector(".country-info");t.addEventListener("click",(e=>{const t=e.target.closest("li");if(t){const e=t.id;n(e).then((n=>{o(n)}))}}));const l=debounce((()=>{const i=e.value.trim();i?n(i).then((n=>{o(n),n.length>10?Notiflix.Notify.info("Too many matches found. Please enter a more specific name."):n.length>=2&&n.length<=10?Notiflix.Notify.success(`${n.length} countries found.`):1===n.length?Notiflix.Notify.success("One country found."):Notiflix.Notify.failure("Oops, there is no country with that name.")})):t.innerHTML=""}),300),s=n=>{const e={ul:{display:"flex","flex-direction":"column",gap:"10px",padding:0},li:{"list-style":"none",display:"inline-flex",gap:"10px",cursor:"pointer"},img:{width:"40px"},p:{margin:0},h4:{"font-size":"30px","font-weight":"bold",margin:0},span:{"font-weight":"bold"}}[n];return Object.entries(e).map((([n,e])=>`${n}:${e}`)).join(";")},o=n=>{const e=n.map((({name:{common:n},flags:e})=>`\n        <li id="${n}" style="${s("li")}">\n          <img src="${e[0]}" alt="${n} flag" style="${s("img")}">\n          <p style="${s("p")}">${n}</p>\n        </li>\n      `)).join("");if(t.innerHTML=e,t.style.cssText=s("ul"),i.innerHTML="",1===n.length){const{name:e,capital:l,population:o,languages:a,flags:r}=n[0];t.innerHTML="",i.innerHTML=`\n        <ul style="${s("ul")}">\n          <li style="${s("li")}">\n            <img src="${r[0]}" alt="${e.common} flag" style="${s("img")}">\n            <h4 style="${s("h4")}">${e.common}</h4>\n          </li>\n          <li style="${s("li")}">\n            <span style="${s("span")}">Capital:</span>\n            <p style="${s("p")}">${l[0]||"-"}</p>\n          </li>\n          <li style="${s("li")}">\n            <span style="${s("span")}">Population:</span>\n            <p style="${s("p")}">${o}</p>\n          </li>\n          <li style="${s("li")}">\n            <span style="${s("span")}">Languages:</span>\n            <p style="${s("p")}">${Object.values(a).join(", ")}</p>\n</li>\n</ul>`}};e.addEventListener("input",l);
//# sourceMappingURL=index.22cf66be.js.map
